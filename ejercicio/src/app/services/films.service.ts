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

  constructor(public http: HttpClient) { }

  public getFilmsBySearch(search: string, key: string): Observable<ArrayResponse> {
    return this.http.get<ArrayResponse>(this.url + "/?s=" + search + "&apikey=" + key);
  }

  public getFilmById(id: string, key: string): Observable<Film> {
    return this.http.get<Film>(this.url + "/?i=" + id + "&apikey=" + key);
  }


}
