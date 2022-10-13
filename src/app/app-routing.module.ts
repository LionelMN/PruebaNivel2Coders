import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './views/movie-list/movie-list.component';
import { MovieDetailsComponent } from './views/movie-details/movie-details.component';

const routes: Routes = [
  {path:'', component: MovieListComponent},
  {path:'movies/:id', component: MovieDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
