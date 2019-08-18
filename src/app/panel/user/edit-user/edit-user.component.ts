import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';

import {UpdateUser} from '../../store/actions/users.actions';
import {User} from '../../_models/user';
import {AppStateInterface} from '../../../store/state/app.state';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  user: User = null;
  userForm: FormGroup;

  @Input('currentUser')
  set currentUser(user: User) {
    if (user) {
      this.user = user;
      this.userForm.patchValue({
        login: user.login,
        name: user.name,
        sername: user.sername,
        phone: user.phone,
        role: user.role,
        id: user.id
      });
    }
  }

  @Output() editUser = new EventEmitter<User>();

  constructor(
    private fb: FormBuilder,
    private store: Store<AppStateInterface>
  ) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      login: ['', Validators.required],
      name: ['', Validators.required],
      sername: ['', Validators.required],
      phone: ['', Validators.required],
      role: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  changeUser() {
    const editUser: User = {
      id: this.user.id,
      login: this.userForm.get('login').value,
      name: this.userForm.get('name').value,
      sername: this.userForm.get('sername').value,
      phone: this.userForm.get('phone').value,
      role: this.userForm.get('role').value
    };

    this.editUser.emit(editUser);
    this.userForm.reset();
  }

}
