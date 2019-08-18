import { Component, OnInit } from '@angular/core';
import {CreateUser, GetAllUsers, RemoveUser, UpdateUser} from '../store/actions/users.actions';
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
  public currentUser: User = null;

  constructor(
    private store: Store<PanelStateInterface>
  ) { }

  ngOnInit() {
    this.store.dispatch(new GetAllUsers());
    this.store.subscribe((res: any) => {
      this.users = res.panel.users.users;
    });
  }

  chooseUser(currentUser: User) {
    this.currentUser = {...currentUser};
  }

  removeUser(userId: number) {
    this.store.dispatch(new RemoveUser(userId));
  }

  onAddUser(newUser: User) {
    this.store.dispatch(new CreateUser(newUser));
  }

  onEditUser(editUser: User) {
    this.store.dispatch(new UpdateUser(editUser));
  }

}
