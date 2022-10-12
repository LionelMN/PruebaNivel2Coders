import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { MovieI } from 'src/app/interfaces/movie-i';
import { MovieListI } from 'src/app/interfaces/movie-list-i';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private url : string = 'https://api.themoviedb.org/3/movie/popular?api_key=f2b76f05ec092eed0b4c48fa4afc98fb&page=';

  constructor(private http : HttpClient) { }

  public getTrendingMoviesOfWeek(page : string = '1') : Observable<MovieListI>{
    return this.http.get(`${this.url+page}`) as Observable<MovieListI>;
  }
}
