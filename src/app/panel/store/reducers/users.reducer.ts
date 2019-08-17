import {initialUserState, UserStateInterface} from '../state/users.state';
import {UsersActions, UsersActionTypes} from '../actions/users.actions';

export function userReducer(state = initialUserState, action: UsersActions): UserStateInterface {
  switch (action.type) {
    case UsersActionTypes.LOAD_USERS: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }
    case UsersActionTypes.LOAD_USERS_SUCCESS: {
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        loaded: true,
        users: action.payload
      };
    }
    case UsersActionTypes.LOAD_USERS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
        users: []
      };
    }

    default: {
      return state;
    }
  }
}

