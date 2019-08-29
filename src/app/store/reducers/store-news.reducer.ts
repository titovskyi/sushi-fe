import {initialStoreNewsState, StoreNewsStateInterface} from '../state/store-news.state';
import {StoreNewsActions, StoreNewsActionTypes} from '../actions/store-news.action';

export function storeNewsReducer(state = initialStoreNewsState, action: StoreNewsActions): StoreNewsStateInterface {
  switch (action.type) {
    case StoreNewsActionTypes.LOAD_STORENEWS_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        storeNews: action.payload
      };
    }
    // TODO ERROR
    case StoreNewsActionTypes.LOAD_STORENEWS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
        storeNews: []
      };
    }

    case StoreNewsActionTypes.LOAD_ONESTORENEWS_SUCCESS: {
      console.log(action.payload, 'one Store news');
      return {
        ...state,
        loading: false,
        loaded: true,
        currentStoreNews: action.payload
      };
    }
    // TODO ERROR
    case StoreNewsActionTypes.LOAD_ONESTORENEWS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
        currentStoreNews: null
      };
    }

    case StoreNewsActionTypes.CREATE_STORENEWS_SUCCESS: {
      return {
        ...state,
        storeNews: state.storeNews.concat(action.payload)
      };
    }
    // TODO ERROR
    case StoreNewsActionTypes.CREATE_STORENEWS_FAIL: {
      return {
        ...state
      };
    }

    case StoreNewsActionTypes.UPDATE_STORENEWS_SUCCESS: {
      return {
        ...state,
        storeNews: state.storeNews.map((storeNews) => {
          if (storeNews.id === action.payload.id) {
            storeNews.id = action.payload.id;
            storeNews.header = action.payload.header;
            storeNews.description = action.payload.description;
            storeNews.image = action.payload.image;
          }
          return storeNews;
        })
      };
    }
    // TODO ERROR
    case StoreNewsActionTypes.UPDATE_STORENEWS_FAIL: {
      return {
        ...state
      };
    }

    case StoreNewsActionTypes.REMOVE_STORENEWS_SUCCESS: {
      return {
        ...state,
        storeNews: state.storeNews.filter(storeNews => storeNews.id !== action.payload)
      };
    }
    // TODO ERROR
    case StoreNewsActionTypes.REMOVE_STORENEWS_FAIL: {
      return {
        ...state
      };
    }

    default: {
      return state;
    }
  }
}
