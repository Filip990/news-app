import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { NewsService } from '../news.service';
import { ModalArticleComponent } from '../modal-article/modal-article.component';

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.css']
})
export class TopNewsComponent implements OnInit, OnDestroy {

  constructor(public newsService: NewsService,
              private modalService: NgbModal) { }
  public news;
  private subscription;

  ngOnInit() {
    this.newsService.getNews();
     this.subscription = this.newsService.$topHeadlines.subscribe(
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

  openModal(article) {
    const ref = this.modalService.open(ModalArticleComponent);
    ref.componentInstance.data = article;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
