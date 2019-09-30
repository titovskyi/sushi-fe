import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {getMatIconNoHttpProviderError} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class PosterService {
  private posterToken = '612708:96672081f48bbf408f75fde0526488f2';

  constructor(
    private http: HttpClient
  ) { }

  getCategory(categoryId): Observable<any> {
    return this.http.get<any>(`${environment.POSTER}menu.getCategory?token${this.posterToken}&category_id=${categoryId}`);
  }

  getCategories(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.POSTER}/categories`);
  }
  getProducts(): Observable<any[]> {
    return this.http.get<any>(`${environment.POSTER}/products`);
  }
}
