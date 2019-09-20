import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  isLoading: boolean = false;
  constructor(private newsService: NewsService) {
  }
  
  results: Object;
  searchTerm$ = new Subject<string>();

  ngOnInit() {    
      this.newsService.search(this.searchTerm$).subscribe(results =>
         {
           this.isLoading = false;
           this.results = results
          })
  }

  search(term) {
    this.isLoading = true;
      this.searchTerm$.next(term);
  }

}
