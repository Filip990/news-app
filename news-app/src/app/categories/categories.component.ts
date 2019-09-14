import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

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

  constructor(private service: NewsService) { }
  ngOnInit() {
    this.service.getAllByCategory();
    this.service.$newsByCategory.subscribe((categories) => {
      if(categories) {

        [this.general, this.entertainment, this.sport, this.science, this.health, this.technology]
         = categories.map(item => item.articles.slice(0, 5))
         console.log(this.general)
      }
       
    }
      
    )
  }

}
