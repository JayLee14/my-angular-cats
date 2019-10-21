import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CatImage } from './models/cat-image.model';

const API_KEY = '63afce70-26a1-4d51-a724-febac1d55783';

@Injectable({
  providedIn: 'root'
})
export class CatService {
  catImages: CatImage[] = [];

  constructor(private http: HttpClient) {}

  fetchImages() {
    return this.http
      .get<CatImage[]>('https://api.thecatapi.com/v1/images/search', {
        headers: new HttpHeaders({
          'x-api-key': API_KEY
        }),
        params: {
          limit: '10',
          page: '1'
        }
      })
      .subscribe(images => {
        this.catImages = [...this.catImages, ...images];
      });
  }

  findImage(id: string) {
    return this.catImages.find(image => image.id === id);
  }

  getImages() {
    return this.http.get<CatImage[]>(
      'https://api.thecatapi.com/v1/images/search',
      {
        headers: new HttpHeaders({
          'x-api-key': API_KEY
        }),
        params: {
          limit: '10',
          page: '1'
        }
      }
    );
  }
}
