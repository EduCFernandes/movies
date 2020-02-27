import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { LoaderComponent } from './components/loader/loader.component';
import { MovieBoxComponent } from './components/movie-box/movie-box.component';
import { MoviesGridComponent } from './components/movies-grid/movies-grid.component';
import { TheMovieDBService } from './components/services/movide-db.service';
import { FeedbackMessageComponent } from './components/feedback-message/feedback-message.component';

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  declarations: [LoaderComponent, MovieBoxComponent, MoviesGridComponent, FeedbackMessageComponent],
  exports: [LoaderComponent, MovieBoxComponent, MoviesGridComponent, FeedbackMessageComponent],
  providers: [TheMovieDBService],
  entryComponents: []
})
export class SharedModule { }
