import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  constructor(public ser: ApiService) {}

  ngOnInit(): void {
   this.ser.getTopHeadlines().subscribe(data => console.log(data))
  }
}
