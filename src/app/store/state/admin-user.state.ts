import {AdminUser} from '../../_models/adminUser';

export interface AdminUserStateInterface {
  adminUser: AdminUser;
  loading: boolean;
  loaded: boolean;
}

export const initialAdminUserState: AdminUserStateInterface = {
  adminUser: {
    token: '',
    role: '',
    expire: ''
  },
  loading: false,
  loaded: true
};
