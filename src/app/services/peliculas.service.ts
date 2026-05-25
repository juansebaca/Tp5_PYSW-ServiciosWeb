import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private url = 'https://imdb-top-100-movies.p.rapidapi.com';
  private apiKey = 'fe5fc57d8emsh1b4ad0b892c2419p188711jsn134cc2608856';

  constructor(private http: HttpClient) { }

  getPeliculas(): Observable<any> {
    const headers = new HttpHeaders({
      'x-rapidapi-key': this.apiKey,
      'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
    });
    return this.http.get(this.url, { headers });
  }
}