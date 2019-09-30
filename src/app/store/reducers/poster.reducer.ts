import {initialPosterState, PosterStateInterface} from '../state/poster.state';
import {PosterActions, PosterActionTypes} from '../actions/poster.action';

export function posterReducer(state = initialPosterState, action: PosterActions): PosterStateInterface {
  switch(action.type) {
    case PosterActionTypes.LOAD_CATEGORIES_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        posterCategories: action.payload.response
      };
    }

    case PosterActionTypes.LOAD_CATEGORIES_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
        posterCategories: []
      };
    }

    case PosterActionTypes.LOAD_PRODUCTS_SUCCESS: {
      console.log(state);
      return {
        ...state,
        loading: false,
        loaded: true,
        posterProducts: action.payload.response
      };
    }

    case PosterActionTypes.LOAD_PRODUCTS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: true,
        posterProducts: []
      };
    }

    default: {
      return state;
    }
  }
}
