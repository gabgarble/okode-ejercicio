import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { FilmsService } from '../services/films-service.service'
import { Film } from '../models/film.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public films: Film[];
  public filmName: string;

  private key = "740a045";

  constructor(private router: Router, private filmsService: FilmsService) { }

  public searchFilms() {
    if (this.filmName != null) {
      this.filmsService.getFilmsBySearch(this.filmName, this.key).subscribe(
        data => {
          this.films = data.Search;
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
