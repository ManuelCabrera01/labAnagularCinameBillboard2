import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css']
})
export class MyMovieComponent implements OnInit {

    movieId: number;
    Movie: Object;

    constructor(private movieinformation: CinemaSevice,
      private Router: Router) { }

    ngOnInit() {
      this.Router.paramsResult.subscribe((paramsResult) => this.movieId = Number(paramsResult['id']));

      this.fetchAMovie();
    }

    fetchAMovie() {
      this.Movie = this.movieinformation.get(this.movieId);
    }



  }

 }
