import {Action} from '@ngrx/store';

export enum PosterActionTypes {
  LOAD_CATEGORIES = '[Poster] Load Poster Categories',
  LOAD_CATEGORIES_SUCCESS = '[Poster] Load Poster Categories Success',
  LOAD_CATEGORIES_FAIL = '[Poster] Load Poster Categories Fail',
  LOAD_PRODUCTS = '[Poster] Load Poster Products',
  LOAD_PRODUCTS_SUCCESS = '[Poster] Load Poster Products Success',
  LOAD_PRODUCTS_FAIL = '[Poster] Load Poster Products Fail',
}

export class GetPosterCategories implements Action {
  readonly type = PosterActionTypes.LOAD_CATEGORIES;
}

export class GetPosterCategoriesSuccess implements Action {
  readonly type = PosterActionTypes.LOAD_CATEGORIES_SUCCESS;

  constructor(public payload: any) {}
}

export class GetPosterCategoriesFail implements Action {
  readonly type = PosterActionTypes.LOAD_CATEGORIES_FAIL;

  constructor(public payload: string) {}
}

export class GetPosterProducts implements Action {
  readonly type = PosterActionTypes.LOAD_PRODUCTS;
}

export class GetPosterProductsSuccess implements Action {
  readonly type = PosterActionTypes.LOAD_PRODUCTS_SUCCESS;

  constructor(public payload: any) {}
}

export class GetPosterProductsFail implements Action {
  readonly type = PosterActionTypes.LOAD_PRODUCTS_FAIL;

  constructor(public payload: string) {};
}

export type PosterActions =
  GetPosterCategories |
  GetPosterCategoriesSuccess |
  GetPosterCategoriesFail |
  GetPosterProducts |
  GetPosterProductsSuccess |
  GetPosterProductsFail;
