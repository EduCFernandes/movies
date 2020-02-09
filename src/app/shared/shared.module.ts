import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { LoaderComponent } from './components/loader/loader.component';
import { MovieBoxComponent } from './components/movie-box/movie-box.component';
import { MoviesGridComponent } from './components/movies-grid/movies-grid.component';

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  declarations: [LoaderComponent, MovieBoxComponent, MoviesGridComponent],
  exports: [LoaderComponent, MovieBoxComponent, MoviesGridComponent],
  providers: [],
  entryComponents: []
})
export class SharedModule { }
