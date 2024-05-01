import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieListComponent } from './app/movie/movie-list/movie-list.component';
import { MovieCreateComponent } from './app/movie/movie-create/movie.component';

const routes: Routes = [
    { path: '', component: MovieListComponent },
    { path: 'create', component: MovieCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
