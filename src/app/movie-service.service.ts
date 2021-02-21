import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovie } from './Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  public tempMovie : any;

  constructor(private http: HttpClient) { }

  getMovies(movieName="avengers"): Observable<IMovie>{
      
    if(movieName===""){
      movieName="avengers"
    }
      
    return this.http.get<IMovie>(`http://www.omdbapi.com/?s=${movieName}&apikey=c1c209a0`);
  }

}
