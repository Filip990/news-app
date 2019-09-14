import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject } from 'rxjs';

import { TopNews } from './shared/top-news-model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  $topHeadlines = new BehaviorSubject<any>(new TopNews());
  $newsByCategory = new BehaviorSubject<any>([]);

  constructor(private apiService: ApiService) { }

  getNews() {
    this.apiService.getTopHeadlines().subscribe(
      (data) => {
        this.$topHeadlines.next(data);
      }
    )
  }

  getAllByCategory() {
    this.apiService.getTopHeadlinesByCategory().subscribe(
      data => this.$newsByCategory.next(data)
    )
  }
}
