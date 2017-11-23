import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css']
})
export class MyMovieComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}
  goToHome() {
     this.router.navigate(['/home']);  // <!-- Programmatically navigate to home
   }
 }
