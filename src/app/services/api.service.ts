import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {catchError, Observable, throwError, timeout} from "rxjs";

interface HttpParams {
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = "http://localhost:5216/api"

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {
  }

  private handleError = (error: HttpErrorResponse) => {
    this.snackBar.open("Error connecting to the server: " + (error.statusText || error.message), "close", {duration: 5000})
    return throwError(error)
  }
  get(endpoint: string, params?: HttpParams, timeOut?: number): Observable<any> {
    return this.http.get(this.baseUrl + endpoint, {
      withCredentials: true,
      // params: params,
      responseType: "json",
      // observe: "response",
    }).pipe(
      timeout(timeOut || 50000),
      catchError(this.handleError)
    )
  }

  post(endpoint: string, body?: object, timeOut?: number): Observable<any> {
    return this.http.post(this.baseUrl + endpoint, body, {
      withCredentials: true,
      responseType: "json",
      observe: "response"
    }).pipe(
      timeout(timeOut || 50000),
      catchError(this.handleError)
    )
  }
}
