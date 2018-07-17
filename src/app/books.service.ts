import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Books } from './books';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class BooksService {

  private productsUrl = 'api/products';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET products from the server */
  getProducts (): Observable<Books[]> {
      return this.http.get<Books[]>(this.productsUrl);
  }
}