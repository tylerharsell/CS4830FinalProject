import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MovieCreateComponent } from './app/movie/movie-create/movie.component';
import { MovieListComponent } from './app/movie/movie-list/movie-list.component';
import { MovieService } from './app/movie/movie.service';
import { HeaderComponent } from './app/header/header.component';
import { FooterComponent } from './app/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MovieCreateComponent,
    MovieListComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    AppRoutingModule
  ],
  providers: [MovieService], // Updated to MovieService
  bootstrap: [AppComponent]
})
export class AppModule { }
