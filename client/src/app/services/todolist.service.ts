import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders , HttpErrorResponse} from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const baseUrl = '/api/todolist';

// const headers = new HttpHeaders({
//   'Content-Type':'application/json; charset=utf-8; Access-Control-Allow-Origin: *;Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS;Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token;'
// });


@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  constructor(private http: HttpClient) { }
  
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  getAll() {
    return this.http.get(baseUrl).pipe(catchError(this.handleError));
  }
  
  getAll2() {
    return this.http.get(baseUrl).pipe(catchError(this.handleError));;
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
