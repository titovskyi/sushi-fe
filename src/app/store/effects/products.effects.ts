import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ProductService} from '../../_services/product.service';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {
  CreateProduct, CreateProductFail, CreateProductSuccess,
  GetProduct, GetProductFail,
  GetProducts,
  GetProductsFail,
  GetProductsSuccess, GetProductSuccess,
  ProductsActionTypes, RemoveProduct, RemoveProductFail, RemoveProductSuccess
} from "../actions/products.action";
import {catchError, map, mergeMap} from "rxjs/operators";
import {Product} from "../../_models/product";

@Injectable()
export class ProductsEffects {
  constructor(
    private action$: Actions,
    private productService: ProductService
  ) {}

  @Effect()
  getAllProducts$: Observable<Action> = this.action$.pipe(
    ofType<GetProducts>(ProductsActionTypes.LOAD_PRODUCTS),
    mergeMap(() => {
      return this.productService.getProducts().pipe(
        map((products: Product[]) => new GetProductsSuccess(products)),
        catchError((err) => of(new GetProductsFail(err)))
      );
    })
  );

  @Effect()
  getProduct$: Observable<Action> = this.action$.pipe(
    ofType<GetProduct>(ProductsActionTypes.LOAD_PRODUCT),
    map((action: GetProduct) => action.payload),
    mergeMap((productId: number) => {
      return this.productService.getProduct(productId).pipe(
        map((product: Product) => new GetProductSuccess(product)),
        catchError((err) => of(new GetProductFail(err)))
      );
    })
  );

  @Effect()
  createProduct$: Observable<Action> = this.action$.pipe(
    ofType<CreateProduct>(ProductsActionTypes.CREATE_PRODUCT),
    map((action: any) => action.payload),
    mergeMap((product: Product) => {
      return this.productService.createProduct(product).pipe(
        map((newProduct: Product) => new CreateProductSuccess(newProduct)),
        catchError((err) => of(new CreateProductFail(err)))
      );
    })
  );

  @Effect()
  // @ts-ignore
  updateProduct$: Observable<Action> = this.action$.pipe(
    ofType<CreateProduct>(ProductsActionTypes.CREATE_PRODUCT),
    map((action: any) => action.payload),
    mergeMap((currentProduct: Product) => {
      return this.productService.updateProduct(currentProduct).pipe(
        map((prod: Product) => new CreateProductSuccess(prod)),
        catchError((err) => of(new CreateProductFail(err)))
      );
    })
  );

  @Effect()
  // @ts-ignore
  removeProduct$: Observable<Action> = this.action$.pipe(
    ofType<RemoveProduct>(ProductsActionTypes.REMOVE_PRODUCT),
    map((action: any) => action.payload),
    mergeMap((productId: any) => {
      return this.productService.removeProduct(productId).pipe(
        map((result: any) => new RemoveProductSuccess(productId)),
        catchError((err) => of(new RemoveProductFail(err)))
      );
    })
  );

}
