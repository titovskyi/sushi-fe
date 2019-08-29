import {Product} from '../../_models/product';

export interface ProductStateInterface {
  products: Product[];
  orderedProducts: Product[];
  currentProduct: Product;
  loading: boolean;
  loaded: boolean;
}

export const initialProductsState: ProductStateInterface = {
  products: [null],
  orderedProducts: [null],
  currentProduct: null,
  loading: false,
  loaded: true
};
