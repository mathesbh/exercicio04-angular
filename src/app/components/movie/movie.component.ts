import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  private base_url_image: string = 'https://image.tmdb.org/t/p/w500';

  @Input() movies: Object;

  constructor() { }

  ngOnInit(): void {
  }

}
