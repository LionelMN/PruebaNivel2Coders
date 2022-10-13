import { Component, OnInit } from '@angular/core';

import { MovieI } from '../../interfaces/movie-i';
import { MoviesService } from '../../services/movies/movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  constructor(private moviesService : MoviesService) { }

  //Pagination
  page: number = 1;
  movies : MovieI[] = [];

  public getTrendyMovieList(page:string = '1'){
    this.moviesService.getTrendingMoviesOfWeek(page).subscribe(movieList => {
      this.movies = this.movies.concat(movieList.results);
    });
  }

    ngOnInit(): void {
      for (let i = 1; i < 10; i++) {
        this.getTrendyMovieList(i.toString());
      }
    }


}
