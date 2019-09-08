import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {StoreNews} from '../_models/storeNews';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StoreNewsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllNews(): Observable<StoreNews[]> {
    return this.http.get<StoreNews[]>(`${environment.STORE_NEWS}`);
  }

  getOneNews(newsId: number): Observable<StoreNews> {
    return this.http.get<StoreNews>(`${environment.STORE_NEWS}/${newsId}`);
  }

  createStoreNews(newNews: StoreNews): Observable<StoreNews> {
    return this.http.post<StoreNews>(`${environment.STORE_NEWS}`, newNews);
  }

  updateStoreNews(storeNews: StoreNews): Observable<StoreNews> {
    return this.http.patch<StoreNews>(`${environment.STORE_NEWS}/${storeNews.id}`, storeNews);
  }

  removeNews(storeNewsId: number): Observable<any> {
    return this.http.delete<any>(`${environment.STORE_NEWS}/${storeNewsId}`);
  }
}
