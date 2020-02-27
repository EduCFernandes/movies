import { Component, OnInit } from '@angular/core';
import { TheMovieDBService } from '../shared/components/services/movide-db.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loading: boolean = false;
  movies = [];
  searchTitle: string = '';
  constructor(private movieDBService: TheMovieDBService) { }

  ngOnInit() {
    this.loadMovies();
  }

  async loadMovies() {
    try {
      this.loading = true;
      this.movies = [];
      let res;
      if (this.searchTitle) {
        res = await this.movieDBService.getByName({ query: this.searchTitle });
      } else {
        res = await this.movieDBService.getPopularMovies();
      }
      this.movies = res.results;
    } catch (error) {
      console.error(error);
    } finally {
      this.loading = false;
    }
  }
}
