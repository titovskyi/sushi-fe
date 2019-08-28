import {ActionReducerMap} from '@ngrx/store';

import {routerReducer} from '@ngrx/router-store';
import {AppStateInterface} from '../state/app.state';
import {adminUserReducer} from './admin-user.reducer';
import {commentReducer} from './comments.reducer';
import {storeInfoReducer} from './store-info.reducer';
import {storeNewsReducer} from './store-news.reducer';

export const reducers: ActionReducerMap<AppStateInterface> = {
  router: routerReducer,
  adminUser: adminUserReducer,
  comments: commentReducer,
  info: storeInfoReducer,
  storeNews: storeNewsReducer
};
