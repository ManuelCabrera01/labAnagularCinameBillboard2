import {Injectable} from '@angular/core';
import * as _ from 'underscore';
import Movies from  '../sample-movies';

@Injectable ()

export class  CinemaSevice {
  movies = Movies;
  Movie :Array <Object> []

  constructor () {}
  getMovies(): Array <Object>{
    return this.movies;
  }
  get(idMovies: number): Object {
    return _*findWhere(this.movies,{id: idmovie});
  }
}
