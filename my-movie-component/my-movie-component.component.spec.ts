import { ActivatedRoute} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {CinemaSevice} from  '../service/cinema.service';

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css']
})


export class MyMovieComponent implements OnInit {

    movieId: number;
    Movie: Object;

    constructor(private movieinformation: CinemaSevice,
      private Router: ActivatedRoute) { }

    ngOnInit() {
      this.Router.params.subscribe((params) => this.movieId = Number(params['id']));

      this.fetchAMovie();
    }

    fetchAMovie() {
      this.Movie = this.movieinformation.get(this.movieId);
    }



  }
