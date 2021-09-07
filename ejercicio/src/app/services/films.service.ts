import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Film } from '../models/film.model';
import { ArrayResponse } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  private url = 'http://www.omdbapi.com';
  private key = "740a045";

  constructor(public http: HttpClient) { }

  public getFilmsBySearch(search: string): Observable<ArrayResponse> {
    return this.http.get<ArrayResponse>(this.url + "/?s=" + search + "&apikey=" + this.key);
  }

  public getFilmById(id: string): Observable<Film> {
    return this.http.get<Film>(this.url + "/?i=" + id + "&apikey=" + this.key);
  }

}
