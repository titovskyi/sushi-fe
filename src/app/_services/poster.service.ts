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

  postOrder(order): Observable<any[]> {
    const prepareOrderProducts = order.products.map((product) => {
      return  {
        product_id: product.product_id,
        count: product.count
      };
    });

    return this.http.post<any>(`${environment.POSTER}/order`, {
      spot_id: order.spot_id,
      phone: order.phone,
      first_name: order.first_name,
      email: order.email,
      address: order.address,
      products: prepareOrderProducts
    });
  }
}
