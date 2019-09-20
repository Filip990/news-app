// A service for delegating the data
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { TopNews } from './shared/top-news-model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  // BehaviorSubject acts as a subscription and a subscriber simultaniously
  topHeadlines$ = new BehaviorSubject<any>(new TopNews());
  newsByCategory$ = new BehaviorSubject<any>([]);

  public country: string = 'us'; // default country

  constructor(private apiService: ApiService) { }

  // Get top headlines
  getNews() {
    this.apiService.getTopHeadlines(this.country).subscribe(
      (data) => {
        this.topHeadlines$.next(data);
      }
    )
  }

  // Get headlines by categories
  getAllByCategory() {
    this.apiService.getTopHeadlinesByCategory(this.country).subscribe(
      data => this.newsByCategory$.next(data)
    )
  }

  // Perform search
  search(terms: Observable<string>) {
      return terms.pipe(debounceTime(800)
        ,distinctUntilChanged()
        ,switchMap(term => {
            return this.apiService.searchEntries(term)
        })
        )
  }

  changeLanguage(lang: string) {
    this.country = lang; // assign country 
    this.apiService.changeCountry(lang).subscribe(
      data => {
        this.topHeadlines$.next(data);
        this.newsByCategory$.next(data);
        }
      )
  }
}
