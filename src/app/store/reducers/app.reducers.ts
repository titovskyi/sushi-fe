import {ActionReducerMap} from '@ngrx/store';
import {InjectionToken} from '@angular/core';
import {routerReducer} from '@ngrx/router-store';

import {AppStateInterface} from '../state/app.state';
import {adminUserReducer} from './admin-user.reducer';
import {commentReducer} from './comments.reducer';
import {storeInfoReducer} from './store-info.reducer';
import {storeNewsReducer} from './store-news.reducer';
import {productReducer} from './products.reducer';
import {errorReducer} from './error.reducers';
import {posterReducer} from './poster.reducer';

export const reducers: ActionReducerMap<AppStateInterface> = {
  router: routerReducer,
  adminUser: adminUserReducer,
  comments: commentReducer,
  info: storeInfoReducer,
  storeNews: storeNewsReducer,
  products: productReducer,
  error: errorReducer,
  poster: posterReducer
};

export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<AppStateInterface>>('root reducer');
