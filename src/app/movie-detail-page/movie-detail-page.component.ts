import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-movie-detail-page',
  templateUrl: './movie-detail-page.component.html',
  styleUrls: ['./movie-detail-page.component.css']
})
export class MovieDetailPageComponent implements OnInit {

  public movie;

  constructor(private _movieService:MovieServiceService) { }

  ngOnInit(): void {
      this.movie = JSON.parse(localStorage.getItem('movie'));
      console.log(this.movie);   
  }

}
