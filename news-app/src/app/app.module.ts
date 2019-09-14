import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopNewsComponent } from './top-news/top-news.component';
import { AppRoutingModule } from './app-routing.module';
import { CategoriesComponent } from './categories/categories.component';
import { SearchComponent } from './search/search.component';
import { ModalArticleComponent } from './modal-article/modal-article.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopNewsComponent,
    CategoriesComponent,
    SearchComponent,
    ModalArticleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  entryComponents: [ModalArticleComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
