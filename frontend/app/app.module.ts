import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule}   from '@angular/router';

import {AppComponent} from './app.component';
import {BookComponent}  from './book.component';
import {BookDetailComponent} from "./book-detail.component";
import {BookService} from "./book.service";
import {DashboardComponent} from "./dashboard.component";

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path: 'books',
      component: BookComponent
    }, {
      path: 'dashboard',
      component: DashboardComponent
    }, {
      path: 'detail/:id',
      component: BookDetailComponent
    }, {
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    }])
  ],
  declarations: [AppComponent, BookComponent, DashboardComponent, BookDetailComponent],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
