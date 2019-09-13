import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

import { TopNews } from './shared/top-news-model'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  $dataSource = new BehaviorSubject<any>(new TopNews());

  constructor(private apiService: ApiService) { }

  getNews() {
    this.apiService.getTopHeadlines().subscribe(
      (data) => {
        this.$dataSource.next(data);
      }
    )
  }
}
