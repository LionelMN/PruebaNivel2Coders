import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MovieI } from '../../interfaces/movie-i';
import { MoviesService } from '../../services/movies/movies.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  searchedMovie : string = '';
  public isSearchActive : boolean = false;
  private allMovies : MovieI[] = [];
  public filteredMovies : MovieI[] = [];

  constructor(
    private moviesService : MoviesService,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit(): void {
    for (let i = 1; i < 10; i++) {
      this.getTrendyMovieList(i.toString());
    }
  }

  public getTrendyMovieList(page:string = '1'){
    this.moviesService.getTrendingMoviesOfWeek(page).subscribe(movieList => {
      this.allMovies = this.allMovies.concat(movieList.results);
    });
  }

  onActivateSearch(){
    this.isSearchActive = true;
  }

  onDeactivateSearch(){
    setTimeout( () => {
      this.isSearchActive = false;
    }, 500)
  }

  filterItems(movie : string){
    movie = movie.toLowerCase()
      this.filteredMovies = this.allMovies;
      this.filteredMovies = this.allMovies.filter( movies => movies.title.includes(movie));
  }

  selectSuggestion(suggestedOption : string) {
    this.searchedMovie = suggestedOption;
  }

  public reloadPage(input : string){
    input = input.toLowerCase()
    this.searchedMovie = "";
    this.document.location.replace(`movies/${input}`);
  }

}
