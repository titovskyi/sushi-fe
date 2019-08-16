import {User} from '../../_models/user';

export interface UserStateInterface {
  users: User[];
  loading: boolean;
  loaded: boolean;
}

export const initialUserState: UserStateInterface = {
  users: [
    {name: 'Sasha'}
  ],
  loading: false,
  loaded: true
};
