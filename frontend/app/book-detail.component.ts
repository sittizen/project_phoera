import { Component, Input, OnInit } from '@angular/core';
import {Book} from "./book";
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { BookService } from './book.service';

import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  selector: 'book-detail',
  template: `
  <div *ngIf="book">
    <h2>{{book.title}} details!</h2>
    <div><label>id: </label>{{book.id}}</div>
  </div>
`
})
export class BookDetailComponent implements OnInit {

  @Input()
  book: Book;

  ngOnInit(): void {
    this.route.params
    .switchMap((params: Params) => this.bookService.getBook(+params['id']))
    .subscribe(book => this.book = book);
  }

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
}
