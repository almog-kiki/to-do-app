import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders , HttpErrorResponse} from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const baseUrl = '/api/todolist';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  constructor(private http: HttpClient) { }
  
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  };

  getAll() {
    return this.http.get(baseUrl).pipe(catchError(this.handleError));
  }

  get(id) {
    return this.http.get(`${baseUrl}/${id}`).pipe(catchError(this.handleError));;
  }

  create(data) {
    return this.http.post(baseUrl, data).pipe(catchError(this.handleError));;
  }

  update(id, data) {
    return this.http.put(`${baseUrl}/${id}`, data).pipe(catchError(this.handleError));;
  }

  delete(id) {
    return this.http.delete(`${baseUrl}/${id}`).pipe(catchError(this.handleError));;
  }

  deleteAll() {
    return this.http.delete(baseUrl).pipe(catchError(this.handleError));;
  }
}
