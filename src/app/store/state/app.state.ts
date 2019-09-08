import {RouterReducerState} from '@ngrx/router-store';
import {AdminUserStateInterface, initialAdminUserState} from './admin-user.state';
import {CommentStateInterface, initialCommentState} from './comment.state';
import {initialStoreInfoState, StoreInfoStateInterface} from './store-info.state';
import {initialStoreNewsState, StoreNewsStateInterface} from './store-news.state';
import {initialProductsState, ProductStateInterface} from './product.state';

export interface AppStateInterface {
  router?: RouterReducerState;
  adminUser: AdminUserStateInterface;
  comments: CommentStateInterface;
  info: StoreInfoStateInterface;
  storeNews: StoreNewsStateInterface;
  products: ProductStateInterface;
  error: {error: string};
}

export const initialAppState: AppStateInterface = {
  adminUser: initialAdminUserState,
  comments: initialCommentState,
  info: initialStoreInfoState,
  storeNews: initialStoreNewsState,
  products: initialProductsState,
  error: {error: ''}
};

export function getInitialState(): AppStateInterface {
  return initialAppState;
}
