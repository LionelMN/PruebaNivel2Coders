import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { MovieI } from 'src/app/interfaces/movie-i';
import { MovieListI } from 'src/app/interfaces/movie-list-i';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private trendyMovieURL : string = `https://api.themoviedb.org/3/movie/popular?api_key=${environment.apiKey}&page=`;
  private singleMovieURL : string = `https://api.themoviedb.org/3/movie/`;

  constructor(private http : HttpClient) { }

  public getTrendingMoviesOfWeek(page : string = '1') : Observable<MovieListI>{
    return this.http.get(`${this.trendyMovieURL+page}`) as Observable<MovieListI>;
  }

  public getMovieById(id : string | null) : Observable<MovieI>{
    return this.http.get(`${this.singleMovieURL+id}?api_key=${environment.apiKey}`) as Observable<MovieI>;
  }
}
