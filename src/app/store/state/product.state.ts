import {Product} from '../../_models/product';

export interface ProductStateInterface {
  products: Product[];
  orderedProducts: any[];
  currentProduct: Product;
  loading: boolean;
  loaded: boolean;
}

export const initialProductsState: ProductStateInterface = {
  products: [
    {
      id: null,
      name: '',
      category: '',
      sub_category: '',
      product_image: '',
      price: null,
      consist: ''
    }
  ],
  orderedProducts: [],
  currentProduct:
    {
      id: null,
      name: '',
      category: '',
      sub_category: '',
      product_image: '',
      price: null,
      consist: ''
    },
  loading: false,
  loaded: true
};
