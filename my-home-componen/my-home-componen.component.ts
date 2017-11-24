import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {CinemaSevice} from  '../service/cinema.service';

@Component({
  selector: 'app-my-home-componen',
  templateUrl: './my-home-componen.component.html',
  styleUrls: ['./my-home-componen.component.css'],
   encapsulation: ViewEncapsulation.None,
    providers: [CinemaSevice]
})
export class MyHomeComponent implements OnInit {

  movies: Object[] = [];

  constructor(private movieInfo: CinemaSevice ) { }

  ngOnInit() {
    this.fetchMovies();
  }

  fetchMovies() {
    this.movies =  this.movieInfo.getMovies();
  }
}
