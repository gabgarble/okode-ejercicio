import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { FilmsService } from '../services/films.service'
import { Film } from '../models/film.model';
import { ArrayResponse } from '../models/response.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public films: Film[];
  public response: ArrayResponse;
  public filmName: string;

  constructor(private router: Router, private filmsService: FilmsService) { }

  public searchFilms() {
    if (this.filmName != null) {
      this.filmsService.getFilmsBySearch(this.filmName).subscribe(
        data => {
          this.films = data.Search;
          console.log(data);
          console.log(this.films);
        },
        error => {
          console.error(error);
        }
      );
    }
  }

  public navigation(choosedFilm: Film) {
    let navigationExtras: NavigationExtras = {
      state: {
        filmId: choosedFilm.imdbID
      }
    };
    this.router.navigate(['details'], navigationExtras);
  }
}
