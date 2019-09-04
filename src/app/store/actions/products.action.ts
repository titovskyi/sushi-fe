import {Action} from '@ngrx/store';
import {Product} from '../../_models/product';
import {
  CreateNews, CreateNewsFail, CreateNewsSuccess,
  GetAllNews,
  GetAllNewsFail,
  GetAllNewsSuccess,
  GetOneNews,
  GetOneNewsFail,
  GetOneNewsSuccess, RemoveNews, RemoveNewsFail, RemoveNewsSuccess, UpdateNews, UpdateNewsFail, UpdateNewsSuccess
} from "./store-news.action";

export enum ProductsActionTypes {
  LOAD_PRODUCTS = '[Product] Load Products',
  LOAD_PRODUCTS_SUCCESS = '[Product] Load Products Success',
  LOAD_PRODUCTS_FAIL = '[Product] Load Products Fail',
  ADD_ORDERED_PRODUCT = '[Product] Add Ordered Product',
  CHANGE_ORDERED_PRODUCT_QUANTITY = '[Product] Change Ordered Product Quantity',
  ADD_ORDERED_PRODUCT_SUCCESS = '[Product] Add Ordered Product Success',
  ADD_ORDERED_PRODUCT_FAIL = '[Product] Add Ordered Product Fail',
  LOAD_PRODUCT = '[Product] Load Product',
  LOAD_PRODUCT_SUCCESS = '[Product] Load Product Success',
  LOAD_PRODUCT_FAIL = '[Product] Load Product Fail',
  CREATE_PRODUCT = '[Product] Create Product',
  CREATE_PRODUCT_SUCCESS = '[Product] Create Product Success',
  CREATE_PRODUCT_FAIL = '[Product] Create Product Fail',
  UPDATE_PRODUCT = '[Product] Update Product',
  UPDATE_PRODUCT_SUCCESS = '[Product] Update Product Success',
  UPDATE_PRODUCT_FAIL = '[Product] Update Product Fail',
  REMOVE_PRODUCT = '[Product] Remove Product',
  REMOVE_PRODUCT_SUCCESS = '[Product] Remove Product Success',
  REMOVE_PRODUCT_FAIL = '[Product] Remove Product Fail',
}

export class GetProducts implements Action {
  readonly type = ProductsActionTypes.LOAD_PRODUCTS;

  constructor() {}
}

export class GetProductsSuccess implements Action {
  readonly type = ProductsActionTypes.LOAD_PRODUCTS_SUCCESS;

  constructor(public payload: Product[]) {}
}

export class GetProductsFail implements Action {
  readonly type = ProductsActionTypes.LOAD_PRODUCTS_FAIL;

  constructor(public payload: string) {}
}

export class GetProduct implements Action {
  readonly type = ProductsActionTypes.LOAD_PRODUCT;

  constructor(public payload: number) {}
}

export class GetProductSuccess implements Action {
  readonly type = ProductsActionTypes.LOAD_PRODUCT_SUCCESS;

  constructor(public payload: any) {}
}

export class GetProductFail implements Action {
  readonly type = ProductsActionTypes.LOAD_PRODUCT_FAIL;

  constructor(public payload: string) {}
}

export class CreateProduct implements Action {
  readonly type = ProductsActionTypes.CREATE_PRODUCT;

  constructor(public payload: Product) {}
}

export class CreateProductSuccess implements Action {
  readonly type = ProductsActionTypes.CREATE_PRODUCT_SUCCESS;

  constructor(public payload: Product) {}
}

export class CreateProductFail implements Action {
  readonly type = ProductsActionTypes.CREATE_PRODUCT_FAIL;

  constructor(public payload: string) {}
}

export class UpdateProduct implements Action {
  readonly type = ProductsActionTypes.UPDATE_PRODUCT;

  constructor(public payload: Product) {}
}

export class UpdateProductSuccess implements Action {
  readonly type = ProductsActionTypes.UPDATE_PRODUCT_SUCCESS;

  constructor(public payload: Product) {}
}

export class UpdateProductFail implements Action {
  readonly type = ProductsActionTypes.UPDATE_PRODUCT_FAIL;

  constructor(public payload: string) {}
}

export class RemoveProduct implements Action {
  readonly type = ProductsActionTypes.REMOVE_PRODUCT;

  constructor(public payload: number) {}
}

export class RemoveProductSuccess implements Action {
  readonly type = ProductsActionTypes.REMOVE_PRODUCT_SUCCESS;

  constructor(public payload: any) {}
}

export class RemoveProductFail implements Action {
  readonly type = ProductsActionTypes.REMOVE_PRODUCT_FAIL;

  constructor(public payload: string) {}
}

export class AddOrderedProduct implements Action {
  readonly type = ProductsActionTypes.ADD_ORDERED_PRODUCT;

  constructor(public payload: any[]) {}
}

export class ChangeOrderedProductQuantity implements Action {
  readonly type = ProductsActionTypes.CHANGE_ORDERED_PRODUCT_QUANTITY;

  constructor(public payload: any) {}
}

export type ProductsActions =
  GetProducts |
  GetProductsSuccess |
  GetProductsFail |
  GetProduct |
  GetProductSuccess |
  GetProductFail |
  CreateProduct |
  CreateProductSuccess |
  CreateProductFail |
  UpdateProduct |
  UpdateProductSuccess |
  UpdateProductFail |
  RemoveProduct |
  RemoveProductSuccess |
  RemoveProductFail |
  AddOrderedProduct |
  ChangeOrderedProductQuantity;
