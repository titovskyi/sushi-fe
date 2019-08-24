import {StoreInfo} from '../../_models/storeInfo';

export interface StoreInfoStateInterface {
  info: StoreInfo;
  loading: boolean;
  loaded: boolean;
}

export const initialStoreInfoState: StoreInfoStateInterface = {
  info: {
    id: 0,
    city: '',
    delivery_info: '',
    delivery_time: '',
    map: '',
    logo: '',
    prev_logo_name: '',
    phone: ''
  },
  loading: false,
  loaded: true
};
