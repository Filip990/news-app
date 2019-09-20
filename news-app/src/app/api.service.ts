// A service that handles all our API communication
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators'; 


@Injectable({
  providedIn: 'root'
})
export class ApiService {

   apiKey: string = '&apiKey=65f83ecd273a4a93bd6f00efc242ecfa';
   baseUrl: string = 'https://newsapi.org/v2/top-headlines';
   queryUrl: string = '?q='
   countryUrl: string = '?country='
  
  constructor(private httpClient: HttpClient, 
              private location: Location) { }

  public getTopHeadlines(country: string) {
    return this.httpClient.get(this.baseUrl + this.countryUrl + country + this.apiKey);
  }

  public getTopHeadlinesByCategory(country: string) {
    let general = this.httpClient.get(this.baseUrl + this.countryUrl + country +'&category=general' + this.apiKey);
    let entertainment = this.httpClient.get(this.baseUrl + this.countryUrl + country +'&category=entertainment' + this.apiKey)
    let sport = this.httpClient.get(this.baseUrl + this.countryUrl + country +'&category=sport' + this.apiKey)
    let science = this.httpClient.get(this.baseUrl + this.countryUrl + country +'&category=science' + this.apiKey)
    let health = this.httpClient.get(this.baseUrl + this.countryUrl + country +'&category=health' + this.apiKey)
    let technology = this.httpClient.get(this.baseUrl + this.countryUrl + country +'&category=technology' + this.apiKey)
    
    return forkJoin([general, entertainment, sport, science, health, technology])
    // When all observables complete forkJoin emits the last value from each (we subscribe to it in categories.component)
  }

  searchEntries(term) {
      return this.httpClient
            .get(this.baseUrl + this.queryUrl + term + this.apiKey)
            .pipe(map(res => res));

  }

  changeCountry(country: string) {
    if (this.location.path() === '/top-news') {
      return this.getTopHeadlines(country);
    } else {
      return this.getTopHeadlinesByCategory(country)
    }
  }
}
