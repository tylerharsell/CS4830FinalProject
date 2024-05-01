import { Component } from '@angular/core';

import { Movie } from './app/movie/movie.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  storedMovie: Movie[] = [];
  title = 'Web_Dev_2_Final';
  onMovieAdded(movie: Movie){
    this.storedMovie.push(movie)
  }
}
