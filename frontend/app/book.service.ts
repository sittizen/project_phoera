import { Injectable } from '@angular/core';
import { BOOKS } from './mock-books';
import {Book} from "./book";

@Injectable()
export class BookService {
   getBooks(): Promise<Book[]> {
      return Promise.resolve(BOOKS);
   }

  getBook(id: number): Promise<Book> {
    return this.getBooks().then(books => books.find(book => book.id === id));
  }
}
