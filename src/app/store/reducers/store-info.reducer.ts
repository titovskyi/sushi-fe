import {StoreInfoActions, StoreInfoActionsTypes} from '../actions/store-info.actions';
import {initialStoreInfoState, StoreInfoStateInterface} from '../state/store-info.state';

export function storeInfoReducer(state = initialStoreInfoState, action: StoreInfoActions): StoreInfoStateInterface {
  switch (action.type) {
    case StoreInfoActionsTypes.LOAD_INFO_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        info: action.payload
      };
    }
    case StoreInfoActionsTypes.LOAD_INFO_FAIL: {
      return {
        ...state,
        info: {
          id: null,
          city: '',
          delivery_info: '',
          delivery_time: '',
          map: '',
          logo: '',
          phone: ''
        },
        loading: false,
        loaded: false
      };
    }

    case StoreInfoActionsTypes.UPDATE_INFO_SUCCESS: {
      return {
        ...state,
        info: action.payload
      };
    }
    case StoreInfoActionsTypes.LOAD_INFO_FAIL: {
      return {
        ...state
      };
    }

    default: {
      return state;
    }
  }
}
