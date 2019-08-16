import {UserStateInterface, initialUserState} from './users.state';

export interface PanelStateInterface {
  users: UserStateInterface;
}

export const initialPanelState = {
  users: initialUserState
};
