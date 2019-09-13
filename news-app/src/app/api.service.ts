import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl: string = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=65f83ecd273a4a93bd6f00efc242ecfa'
  
  constructor(private httpClient: HttpClient) { }

  public getTopHeadlines() {
    return this.httpClient.get(this.apiUrl);
  }

}
