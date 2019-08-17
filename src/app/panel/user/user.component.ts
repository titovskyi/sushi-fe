import { Component, OnInit } from '@angular/core';
import {GetAllUsers} from '../store/actions/users.actions';
import {Store} from '@ngrx/store';
import {PanelStateInterface} from '../store/state/panel.state';
import {User} from '../_models/user';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public users: User[] = null;

  constructor(
    private store: Store<PanelStateInterface>
  ) { }

  ngOnInit() {
    this.store.dispatch(new GetAllUsers());
    this.store.subscribe((res: any) => {
      this.users = res.panel.users.users;
    });
  }
}
