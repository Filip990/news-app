import { Component, OnInit } from '@angular/core';

import { NewsService } from '../news.service';

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.css']
})
export class TopNewsComponent implements OnInit {

  constructor(public newsService: NewsService) { }
  public news;

  ngOnInit() {
    this.newsService.getNews();
    this.newsService.$dataSource.subscribe(
      (data) => {
        if (data) {
          console.log(data)
          this.news = data.articles;
        }
      }
    )
  }

  onClick(param) {
    console.log(param);
     // TODO: delegate param to child components
  }

}
