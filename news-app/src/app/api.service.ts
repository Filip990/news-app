import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl: string = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=65f83ecd273a4a93bd6f00efc242ecfa'
  
  constructor(private httpClient: HttpClient) { }

  public getTopHeadlines() {
    return this.httpClient.get(this.apiUrl);
  }

  public getTopHeadlinesByCategory() {
    let general = this.httpClient.get('https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=65f83ecd273a4a93bd6f00efc242ecfa')
    let entertainment = this.httpClient.get('https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=65f83ecd273a4a93bd6f00efc242ecfa')
    let sport = this.httpClient.get('https://newsapi.org/v2/top-headlines?country=us&category=sport&apiKey=65f83ecd273a4a93bd6f00efc242ecfa')
    let science = this.httpClient.get('https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=65f83ecd273a4a93bd6f00efc242ecfa')
    let health = this.httpClient.get('https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=65f83ecd273a4a93bd6f00efc242ecfa')
    let technology = this.httpClient.get('https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=65f83ecd273a4a93bd6f00efc242ecfa')
    return forkJoin([general, entertainment, sport, science, health, technology])
  }

}
