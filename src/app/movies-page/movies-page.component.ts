import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css']
})
export class MoviesPageComponent implements OnInit {

  public searchBox = "";

  searchMovie(){
    this._movieService.getMovies(this.searchBox)
        .subscribe(data => {
          this.movies = data
        });  
  }
  onKey(event:any){
    this.searchBox = event.target.value;
  }

  public movies;

  public noMovie = false;

  constructor(private _movieService:MovieServiceService,private router:Router) { }

  ngOnInit(): void {
    this._movieService.getMovies()
        .subscribe(data => {
          this.movies = data
        });   
  }

  onMovieClicked(movie){
      localStorage.setItem('movie',JSON.stringify(movie));
      this.router.navigate(['/movie']);
  }

}
