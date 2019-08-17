import {createFeatureSelector, createSelector} from '@ngrx/store';
import {UserStateInterface} from '../state/users.state';
import {AppStateInterface} from '../../../store/state/app.state';

const getUsersState = createFeatureSelector<AppStateInterface>(
  'users'
);

export const getUsers = createSelector(
  getUsersState,
  (state: AppStateInterface) => {
    console.log(state, 'asdasd');
  }
);
//
// export const getUsersLoading = createSelector(
//   getUsersState,
//   (state: AdminUserStateInterface) => state.adminUser
// );
