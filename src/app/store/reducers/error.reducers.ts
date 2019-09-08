import {ErrorActions, ErrorActionsType} from '../actions/error.actions';
import {ErrorStateInterface, initialErrorState} from '../state/error.state';

export function errorReducer(state = initialErrorState, action: ErrorActions): ErrorStateInterface{
  switch (action.type) {
    case ErrorActionsType.ADD_ERROR: {
      return {
        ...state,
        error: action.payload
      };
    }

    case ErrorActionsType.REMOVE_ERROR: {
      return {
        ...state,
        error: null
      };
    }

    default: {
      return state;
    }
  }
}
