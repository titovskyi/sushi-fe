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

  // private products: Product[] = [
  //   {
  //     id: 1,
  //     header: 'Первый товар',
  //     productImage: 'first-product.jpg',
  //     price: 100,
  //     consist: 'Суши - Нигири - 30г'
  //   },
  //   {
  //     id: 2,
  //     header: 'Первый товар',
  //     productImage: 'first-product.jpg',
  //     price: 100,
  //     consist: 'Суши - Нигири - 30г'
  //   },
  //   {
  //     id: 3,
  //     header: 'Первый товар',
  //     productImage: 'first-product.jpg',
  //     price: 100,
  //     consist: 'Суши - Нигири - 30г'
  //   },
  //   {
  //     id: 4,
  //     header: 'Первый товар',
  //     productImage: 'first-product.jpg',
  //     price: 100,
  //     consist: 'Суши - Нигири - 30г'
  //   },
  //   {
  //     id: 5,
  //     header: 'Первый товар',
  //     productImage: 'first-product.jpg',
  //     price: 100,
  //     consist: 'Суши - Нигири - 30г'
  //   },
  //   {
  //     id: 6,
  //     header: 'Первый товар',
  //     productImage: 'first-product.jpg',
  //     price: 100,
  //     consist: 'Суши - Нигири - 30г'
  //   },
  //   {
  //     id: 7,
  //     header: 'Первый товар',
  //     productImage: 'first-product.jpg',
  //     price: 100,
  //     consist: 'Суши - Нигири - 30г'
  //   }
  // ];

  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<Product[]> {
    // console.log(this.products);
    // return of(this.products);
    return this.http.get<Product[]>(`${environment.PRODUCT}`);
  }

  getProduct(productId: number): Observable<Product> {
    // return of(this.fakeNews.find((item) => item.id === newsId));
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
