import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopNewsComponent } from './top-news/top-news.component';
import { CategoriesComponent } from './categories/categories.component';
import { SearchComponent } from './search/search.component';


const appRoutes: Routes = [
    { path: '', redirectTo: '/top-news', pathMatch: 'full' },
    { path: 'top-news', component: TopNewsComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: 'search', component: SearchComponent }
]
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}