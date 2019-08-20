import {AdminUserActionTypes, AdminUserActions} from '../actions/admin-user.actions';
import {initialAdminUserState, AdminUserStateInterface} from '../state/admin-user.state';

export function adminUserReducer(state = initialAdminUserState, action: AdminUserActions): AdminUserStateInterface {
  switch (action.type) {
    case AdminUserActionTypes.LOGIN_ADMIN_USER: {
      return {
        ...state,
        loading: true
      };
    }
    case AdminUserActionTypes.LOGIN_ADMIN_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        adminUser: action.payload
      };
    }
    case AdminUserActionTypes.LOGIN_ADMIN_USER_FAIL: {
      return {
        ...state,
        adminUser: {
          token: '',
          role: '',
          expire: ''
        },
        loading: false,
        loaded: false
      };
    }

    default: {
      return state;
    }
  }
}
