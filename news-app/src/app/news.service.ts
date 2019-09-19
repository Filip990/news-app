import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject, Subject, Observable } from 'rxjs';

import { TopNews } from './shared/top-news-model';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  topHeadlines$ = new BehaviorSubject<any>(new TopNews());
  newsByCategory$ = new BehaviorSubject<any>([]);
  searchTerm$ = new Subject<string>();

  constructor(private apiService: ApiService) { }

  getNews() {
    this.apiService.getTopHeadlines().subscribe(
      (data) => {
        this.topHeadlines$.next(data);
      }
    )
  }

  getAllByCategory() {
    this.apiService.getTopHeadlinesByCategory().subscribe(
      data => this.newsByCategory$.next(data)
    )
  }

  search(terms: Observable<string>) {
    return terms.pipe(debounceTime(400)
      ,distinctUntilChanged()
      ,switchMap(term => this.apiService.searchEntries(term))
      )
  }
}
