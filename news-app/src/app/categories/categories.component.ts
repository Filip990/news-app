import { Component, OnInit, OnDestroy } from '@angular/core';

import { NewsService } from '../news.service';
import { Category } from '../shared/category-model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit, OnDestroy {
    public general;
    public entertainment;
    public sport;
    public science;
    public health;
    public technology;
    
    public categories: Category[];
    public country: string;

    // storing our subscription in a variable because unsubscribing directly from BehaviorSubject will break the app 
    private subscription;
    
    constructor(private newsService: NewsService) { }

  ngOnInit() {
      this.newsService.getAllByCategory(); // initial call and subscribe
      this.subscription = this.newsService.newsByCategory$.subscribe((categories) => {
        if(categories) {
          this.country = this.newsService.country; // assign country

          // es6 desctructuring
          [this.general, this.entertainment, this.sport, this.science, this.health, this.technology]
          = categories.map(item => item.articles.slice(0, 5)) // return just first 5 articles for every category

          // TODO create a separate model
          this.categories = [
            {name: 'general',property: this.general},
            {name: 'entertainment', property: this.entertainment},
            {name: 'sport', property: this.sport},
            {name: 'science', property: this.science},
            {name: 'health', property: this.health},
            {name: 'technology', property: this.technology}
          ]
        } 
      })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
