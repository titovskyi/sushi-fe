import {RouterReducerState} from '@ngrx/router-store';
import {AdminUserStateInterface, initialAdminUserState} from './admin-user.state';

export interface AppStateInterface {
  router?: RouterReducerState;
  adminUser: AdminUserStateInterface;
}

export const initialAppState: AppStateInterface = {
  adminUser: initialAdminUserState
};

export function getInitialState(): AppStateInterface {
  return initialAppState;
}
