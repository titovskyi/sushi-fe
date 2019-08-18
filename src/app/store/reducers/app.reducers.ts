import {ActionReducerMap} from '@ngrx/store';

import {routerReducer} from '@ngrx/router-store';
import {AppStateInterface} from '../state/app.state';
import {adminUserReducer} from './admin-user.reducer';
import {commentReducer} from './comments.reducer';

export const reducers: ActionReducerMap<AppStateInterface> = {
  router: routerReducer,
  adminUser: adminUserReducer,
  comments: commentReducer
};
