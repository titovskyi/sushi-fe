import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ProductStateInterface} from '../state/product.state';

const getProductState = createFeatureSelector<ProductStateInterface>(
  'products'
);

export const getOrderedProducts = createSelector(
  getProductState,
  (state: ProductStateInterface) => state.orderedProducts
);
