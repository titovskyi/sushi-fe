import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AdminUserStateInterface} from '../state/admin-user.state';

const getAdminUserState = createFeatureSelector<AdminUserStateInterface>(
  'adminUser'
);

export const getAdminUser = createSelector(
  getAdminUserState,
  (state: AdminUserStateInterface) => state.adminUser
);

// export const getAdminUserLoading = createSelector(
//   getAdminUserState,
//   (state: AdminUserStateInterface) => state.adminUser
// );
