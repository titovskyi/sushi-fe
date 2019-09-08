import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Product} from "../_models/product";
import {environment} from "../../environments/environment";
import {StoreNews} from "../_models/storeNews";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.PRODUCT}`);
  }

  getProduct(productId: number): Observable<Product> {
    return this.http.get<Product>(`${environment.PRODUCT}/${productId}`);
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${environment.PRODUCT}`, product);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.patch<Product>(`${environment.PRODUCT}/${product.id}`, product);
  }

  removeProduct(productId: number): Observable<any> {
    return this.http.delete<any>(`${environment.PRODUCT}/${productId}`);
  }
}
