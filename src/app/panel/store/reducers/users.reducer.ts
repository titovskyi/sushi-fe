import {initialUserState, UserStateInterface} from '../state/users.state';
import {UsersActions, UsersActionTypes} from '../actions/users.actions';
import {User} from '../../_models/user';

export function userReducer(state = initialUserState, action: UsersActions): UserStateInterface {
  switch (action.type) {
    case UsersActionTypes.LOAD_USERS_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        users: action.payload
      };
    }
    // TODO ERROR
    case UsersActionTypes.LOAD_USERS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
        users: []
      };
    }

    case UsersActionTypes.CREATE_USER_SUCCESS: {
      return {
        ...state,
        users: state.users.concat(action.payload)
      };
    }
    // TODO ERROR
    case UsersActionTypes.CREATE_USER_FAIL: {
      return {
        ...state
      };
    }

    case UsersActionTypes.UPDATE_USER_SUCCESS: {
      return {
        ...state,
        users: state.users.map((user: User) => {
          if (user.id === action.payload.id) {
            user.login = action.payload.login;
            user.name = action.payload.name;
            user.sername = action.payload.sername;
            user.phone = action.payload.phone;
            user.role = action.payload.role;
            return user;
          }
          return user;
        })
      };
    }
    // TODO ERROR
    case UsersActionTypes.UPDATE_USER_FAIL: {
      console.log(action.payload, 'patch');
      return {
        ...state
      };
    }

    case UsersActionTypes.REMOVE_USER_SUCCESS: {
      console.log(action.payload, 'remove');
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload)
      };
    }
    // TODO ERROR
    case UsersActionTypes.REMOVE_USER_FAIL: {
      return {
        ...state
      };
    }

    default: {
      return state;
    }
  }
}

