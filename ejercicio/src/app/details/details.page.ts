import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from '../models/film.model';
import { FilmsService } from '../services/films.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  public film: Film;
  public filmId: string;

  constructor(private route: ActivatedRoute, private router: Router, private filmsService: FilmsService) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.filmId = this.router.getCurrentNavigation().extras.state.filmId;
      }
    });
  }

  ngOnInit() {
    this.getFilm();
  }

  public getFilm() {
    this.filmsService.getFilmById(this.filmId).subscribe(
      data => {
        this.film = data;
      },
      error => {
        console.error(error);
      }
    );
  }
}
