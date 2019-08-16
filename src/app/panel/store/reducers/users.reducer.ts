import {initialUserState, UserStateInterface} from '../state/users.state';

export function userReducer(state = initialUserState, action): UserStateInterface {
  switch (action.type) {
    case 'LOAD_USERS': {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }

    default: {
      return state;
    }
  }
}

