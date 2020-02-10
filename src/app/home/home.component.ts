import { Component, OnInit } from '@angular/core';
import { OMDbService } from '../shared/components/services/omdb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loading: boolean = false;
  movies = [];
  searchTitle: string = '';

  constructor(private omdbService: OMDbService) { }

  ngOnInit() {
    this.loadMovies();
  }

  async loadMovies() {
    try {
      this.loading = true;
      this.movies = [];
      let res;
      if (this.searchTitle) {
        res = await this.omdbService.getByName({ query: this.searchTitle });
      } else {
        res = await this.omdbService.getPopularMovies();
      }
      this.movies = res.results;
    } catch (error) {
      console.error(error);
    } finally {
      this.loading = false;
    }
  }
}
