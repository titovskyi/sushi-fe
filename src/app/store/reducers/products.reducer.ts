import {initialProductsState, ProductStateInterface} from '../state/product.state';
import {ProductsActions, ProductsActionTypes} from '../actions/products.action';
import {Product} from '../../_models/product';

export function productReducer(state = initialProductsState, action: ProductsActions): ProductStateInterface {
  switch (action.type) {
    case ProductsActionTypes.LOAD_PRODUCTS_SUCCESS : {
      return {
        ...state,
        loading: false,
        loaded: true,
        products: action.payload
      };
    }

    // TODO ERROR
    case ProductsActionTypes.LOAD_PRODUCTS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
        products: []
      };
    }


    case ProductsActionTypes.LOAD_PRODUCT_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        currentProduct: action.payload
      };
    }
    //  TODO ERROR
    case ProductsActionTypes.LOAD_PRODUCT_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
        currentProduct: null
      };
    }

    case ProductsActionTypes.CREATE_PRODUCT_SUCCESS: {
      return {
        ...state,
        products: state.products.concat(action.payload)
      };
    }
    // TODO ERROR
    case ProductsActionTypes.CREATE_PRODUCT_FAIL: {
      return {
        ...state
      };
    }

    case ProductsActionTypes.UPDATE_PRODUCT_SUCCESS: {
      return {
        ...state,
        products: state.products.map((product: Product) => {
          if (product.id === action.payload.id) {
            product.id = action.payload.id;
            product.name = action.payload.name;
            product.category = action.payload.category;
            product.sub_category = action.payload.sub_category;
            product.product_image = action.payload.product_image;
            product.price = action.payload.price;
            product.consist = action.payload.consist;
          }
          return product;
        })
      };
    }
    // TODO ERROR
    case ProductsActionTypes.UPDATE_PRODUCT_FAIL: {
      return {
        ...state
      };
    }

    case ProductsActionTypes.REMOVE_PRODUCT_SUCCESS: {
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload)
      };
    }
    // TODO ERROR
    case ProductsActionTypes.REMOVE_PRODUCT_FAIL: {
      return {
        ...state
      };
    }

    case ProductsActionTypes.ADD_ORDERED_PRODUCT: {
      return {
        ...state,
        orderedProducts: action.payload
      };
    }

    default: {
      return state;
    }
  }
}
