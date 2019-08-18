import {User} from '../../_models/user';

export interface UserStateInterface {
  users: User[];
  loading: boolean;
  loaded: boolean;
}

export const initialUserState: UserStateInterface = {
  users: [
    { id: 0, login: '', name: '', sername: '', phone: '', role: ''}
  ],
  loading: false,
  loaded: true
};
