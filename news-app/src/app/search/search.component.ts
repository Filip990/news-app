import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private newsService: NewsService) {
    this.newsService.search(this.searchTerm$).subscribe(results =>
       {this.results = results; console.log(this.results)})
    console.log(this.results)
   }
  
  results: Object;
  searchTerm$ = new Subject<string>()

  ngOnInit() {
  }

}
