import {RouterReducerState} from '@ngrx/router-store';
import {AdminUserStateInterface, initialAdminUserState} from './admin-user.state';
import {CommentStateInterface, initialCommentState} from './comment.state';

export interface AppStateInterface {
  router?: RouterReducerState;
  adminUser: AdminUserStateInterface;
  comments: CommentStateInterface
}

export const initialAppState: AppStateInterface = {
  adminUser: initialAdminUserState,
  comments: initialCommentState
};

export function getInitialState(): AppStateInterface {
  return initialAppState;
}
