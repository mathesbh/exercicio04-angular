import { MoviesService } from './services/movies.service';
import { Component, OnInit } from '@angular/core';
import { IMovieItem } from './models/IMovieItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Movies App';

  movies: Array<IMovieItem> = [];

  constructor(private MoviesService: MoviesService){}

  listedMovies = [];

  filterMovie(name){
    const results = this.movies.filter(m => m.title.startsWith(name));
    if(results.length > 0){
      this.listedMovies = results;
    } else {
      this.listedMovies = this.movies;
    }
  }

  ngOnInit(): void {
    this.MoviesService.getMovies().subscribe(data => {
      this.movies = data.results;
    })
  }
}
