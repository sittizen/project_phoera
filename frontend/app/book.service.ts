import {Injectable} from '@angular/core';
import {Book} from "./book";
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BookService {
  private booksUrl = 'http://127.0.0.1:8000/api/books/';

  constructor(private http: Http) {
  }


  getBooks(): Promise<Book[]> {
    var headers = new Headers();
    headers.append('Authorization', 'Token 8f2ce03e64f82600da0ba639fd0849ca0b3b53be');

    return this.http.get(this.booksUrl, {headers: headers})
      .toPromise()
      .then(response => response.json() as Book[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getBook(id: number): Promise<Book> {
    return this.getBooks().then(books => books.find(book => book.id === id));
  }
}
