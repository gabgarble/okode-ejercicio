import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Film } from '../models/film.model';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  private url = 'http://www.omdbapi.com';

  constructor(public http: HttpClient) { }

  public getFilmsBySearch(search: string, key: string): Observable<any>{
    return this.http.get(this.url + "/?s=" + search + "&apikey=" + key);
  }

  public getFilmById(id: string, key: string): Observable<any>{
    return this.http.get(this.url + "/?i=" + id + "&apikey=" + key);
  }

}
