import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MovieI } from '../../interfaces/movie-i';
import { MoviesService } from '../../services/movies/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  constructor(
    private moviesService : MoviesService,
    private route : ActivatedRoute
  ) { }

  private movieId : string | null= '';
  public movie? : MovieI;

  ngOnInit(): void {
    this.movieId =  this.route.snapshot.paramMap.get('id');
    this.getMovie(this.movieId);
  }

  private getMovie(id : string | null) : void{
    this.moviesService.getMovieById(id).subscribe( m => {
      console.log(m);

      this.movie = m;
    })
  }

}
