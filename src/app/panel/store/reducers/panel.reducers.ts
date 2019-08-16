import {ActionReducerMap} from '@ngrx/store';

import {PanelStateInterface} from '../state/panel.state';
import {userReducer} from './users.reducer';

export const reducers: ActionReducerMap<PanelStateInterface> = {
  users: userReducer
};
