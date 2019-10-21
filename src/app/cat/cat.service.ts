import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CatImage } from './models/cat-image.model';

const API_KEY = '63afce70-26a1-4d51-a724-febac1d55783';

@Injectable({
  providedIn: 'root'
})
export class CatService {
  constructor(private http: HttpClient) {}

  getImages(id: string) {
    return this.http.get<CatImage>(
      `https://api.thecatapi.com/v1/images/${id}`,
      {
        headers: new HttpHeaders({
          'x-api-key': API_KEY
        })
      }
    );
  }
}
