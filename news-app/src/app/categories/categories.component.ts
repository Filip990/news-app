import { Component, OnInit } from '@angular/core';

import { NewsService } from '../news.service';
import { Category } from '../shared/category-model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
    public general;
    public entertainment;
    public sport;
    public science;
    public health;
    public technology;
    public categories: Category[];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
      this.newsService.getAllByCategory();
      this.newsService.$newsByCategory.subscribe((categories) => {
        if(categories) {

          [this.general, this.entertainment, this.sport, this.science, this.health, this.technology]
          = categories.map(item => item.articles.slice(0, 5))
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


}
