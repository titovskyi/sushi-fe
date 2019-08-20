import {RouterReducerState} from '@ngrx/router-store';
import {AdminUserStateInterface, initialAdminUserState} from './admin-user.state';
import {CommentStateInterface, initialCommentState} from './comment.state';
import {initialStoreInfoState, StoreInfoStateInterface} from './store-info.state';

export interface AppStateInterface {
  router?: RouterReducerState;
  adminUser: AdminUserStateInterface;
  comments: CommentStateInterface;
  info: StoreInfoStateInterface;
}

export const initialAppState: AppStateInterface = {
  adminUser: initialAdminUserState,
  comments: initialCommentState,
  info: initialStoreInfoState
};

export function getInitialState(): AppStateInterface {
  return initialAppState;
}
