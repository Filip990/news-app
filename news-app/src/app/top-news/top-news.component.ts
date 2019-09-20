import { Component, OnInit, OnDestroy } from '@angular/core';

import { NewsService } from '../news.service';

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.css']
})
export class TopNewsComponent implements OnInit, OnDestroy {

  constructor( public newsService: NewsService ) { }
  public news;
  public country;

  // storing our subscription in a variable because unsubscribing directly from BehaviorSubject will break the app
  private subscription;

  ngOnInit() {
    this.newsService.getNews();
     this.subscription = this.newsService.topHeadlines$.subscribe(
      (data) => {
        if (data) {
          this.country = this.newsService.country;
          this.news = data.articles;
        }
      }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
