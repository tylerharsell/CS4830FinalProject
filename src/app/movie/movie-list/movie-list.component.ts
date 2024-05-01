import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MovieService } from '../movie.service';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit, OnDestroy {
  movies: Movie[] = [];
  private moviesSub: Subscription;

  constructor(public movieService: MovieService) {}

  ngOnInit() {
    this.movieService.getMovies();
    this.moviesSub = this.movieService.getMovieUpdateListener()
      .subscribe((movies: Movie[]) => {
        this.movies = movies;
      });
  }

  ngOnDestroy() {
    this.moviesSub.unsubscribe();
  }
}
