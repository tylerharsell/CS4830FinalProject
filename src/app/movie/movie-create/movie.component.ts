import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieCreateComponent {
  enteredTitle = '';
  enteredDescription = '';
  enteredRating = 0;

  constructor(private movieService: MovieService) {}

  onAddMovie(form: NgForm) {
    if (form.invalid) {
      return;
    }
    // console.log(form.)
    this.movieService.addMovie(form.value.title, form.value.description, form.value.rating);
    form.resetForm();
  }
}
