import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OMDbService {
  // url: string = 'http://www.omdbapi.com/';
  // apiKey: string = 'fcbf534b';

  url: string = 'https://api.themoviedb.org/3/';
  apiKey: string = '109a25f45faf54a53294d7bb8c2d238b';

  constructor(private http: HttpClient) { }

  buildHttpParams(query) {
    let httpParams = new HttpParams();
    Object.keys(query).forEach(item => {
      httpParams = httpParams.append(item, query[item]);
    });
    return httpParams = httpParams.set('api_key', this.apiKey);
  }

  getPopularMovies(): Promise<any> {
    let params: HttpParams;
    params = this.buildHttpParams({ limit: 200 });
    return this.http.get(`${this.url}movie/popular`, { params }).toPromise();
  }

  getByName(query): Promise<any> {
    let params: HttpParams;
    params = this.buildHttpParams(query);
    return this.http.get(`${this.url}search/movie`, { params }).toPromise();
  }

  getById(id): Promise<any> {
    let params: HttpParams;
    params = this.buildHttpParams({});
    return this.http.get(`${this.url}movie/${id}`, { params }).toPromise();
  }

  getCredits(id): Promise<any> {
    let params: HttpParams;
    params = this.buildHttpParams({});
    return this.http.get(`${this.url}movie/${id}/credits`, { params }).toPromise();
  }
}
