import { Injectable } from '@angular/core';
import { Movie } from './movie.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MovieService {
  private movies: Movie[] = [];
  private moviesUpdated = new Subject<Movie[]>();

  constructor(private http: HttpClient) {}
  getMovies() {
    this.http.get<Movie[]>('http://localhost:3000/movies')
      .subscribe((movies) => {
      console.log('Movies fetched:', movies);  // Check what you're actually getting here
      this.movies = movies;
      this.moviesUpdated.next([...this.movies]);
      }, error => {
        console.error('Failed to fetch movies:', error);
      });
  }

  getMovieUpdateListener() {
    return this.moviesUpdated.asObservable();
  }

  addMovie(title: string, description: string, rating: number) {
    const movie: Movie = { title, description, rating };
    this.http.post('http://localhost:3000/movies', movie)
      .subscribe({
        next: (newMovie) => {
          this.movies.push(newMovie as Movie);
          this.moviesUpdated.next([...this.movies]);
        },
        error: error => {
          console.error('Error adding movie:', error);
        }
      });
  }

  // addMovie(title: string, description: string, rating: number) {
  //   const movie: Movie = { title: title, description: description, rating: rating };
  //   this.movies.push(movie);
  //   this.moviesUpdated.next([...this.movies]);
  // }
}
