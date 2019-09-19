import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { NewsService } from '../news.service';

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.css']
})
export class TopNewsComponent implements OnInit, OnDestroy {

  constructor( public newsService: NewsService ) { }
  public news;
  private subscription;

  ngOnInit() {
    this.newsService.getNews();
     this.subscription = this.newsService.topHeadlines$.subscribe(
      (data) => {
        if (data) {
          console.log(data)
          this.news = data.articles;
        }
      }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
