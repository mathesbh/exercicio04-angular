import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMovieApiResult } from '../models/IMovieApiResult';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private api_key = 'd416af5d4faee64e25ab001d87aab5c3';
  private base_url = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }

  getMovies(): Observable<IMovieApiResult> {
    return this.http.get<IMovieApiResult>(`${this.base_url}/movie/popular?api_key=${this.api_key}`);
  }
}
