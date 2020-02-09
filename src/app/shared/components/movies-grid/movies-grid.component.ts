import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'movies-grid',
  templateUrl: './movies-grid.component.html',
  styleUrls: ['./movies-grid.component.scss']
})
export class MoviesGridComponent implements OnInit {
  @Input() movies: any[] = [];
  constructor() { }

  ngOnInit() {
  }

}
