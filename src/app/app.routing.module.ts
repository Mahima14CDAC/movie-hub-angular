import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieComponent } from './movie/movie.component';
import {AddMovieComponent} from './movie/add-movie.component';

const routes: Routes = [
  { path: 'movies', component: MovieComponent },
  { path: 'add', component: AddMovieComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
