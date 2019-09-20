import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private newsService: NewsService) { }

  ngOnInit() {
  }

  changeLanguage(lang: string) {
    this.newsService.changeLanguage(lang)
  }

}
