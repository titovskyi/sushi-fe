import {StoreNews} from '../../_models/storeNews';

export interface StoreNewsStateInterface {
  storeNews: StoreNews[];
  currentStoreNews: StoreNews;
  loading: boolean;
  loaded: boolean;
}

export const initialStoreNewsState: StoreNewsStateInterface = {
  storeNews: [
    {id: 0, header: '', description: '', image: ''}
  ],
  currentStoreNews: {id: null, header: '', description: '', image: ''},
  loading: false,
  loaded: true
};
