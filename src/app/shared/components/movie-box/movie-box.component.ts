import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'movie-box',
  templateUrl: './movie-box.component.html',
  styleUrls: ['./movie-box.component.scss'],
  host: {
    "(click)": "onClick($event)"
  }
})
export class MovieBoxComponent implements OnInit {
  @Input() movie: any;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClick(event) {
    console.log(event);
    this.router.navigate([`movie/${this.movie.id}`]);
  }
}
