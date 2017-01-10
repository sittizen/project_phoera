import { Component, OnInit } from '@angular/core';
import {Book} from "./book";
import {BookService} from "./book.service"





@Component({
  selector: 'books',
  template: `
            <ul class="books" >
              <li *ngFor="let book of books" [routerLink]="['/detail', book.id]">
                <span class="badge">{{book.id}}</span> {{book.title}}
              </li>
            </ul>
            <book-detail [book]="selectedBook"></book-detail>
  `,
  providers: [BookService]
})
export class BookComponent implements OnInit {
  title = 'Project Phoera';
  books: Book[];
  selectedBook: Book;

  constructor(private bookService: BookService) { }

  getBooks(): void {
    this.bookService.getBooks().then(books => this.books = books);
  }


  ngOnInit(): void {
    this.getBooks();
  }


  onSelect(book: Book): void {
    this.selectedBook = book;
  }
}
