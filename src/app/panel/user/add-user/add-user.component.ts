import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store, select} from '@ngrx/store';
import {CreateUser, UsersActions} from '../../store/actions/users.actions';
import {userReducer} from '../../store/reducers/users.reducer';
import {User} from '../../_models/user';
import {AppStateInterface} from '../../../store/state/app.state';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  userForm: FormGroup;

  @Output() addUser = new EventEmitter<User>();

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

  createUser() {
    const newUser: User = {
      id: null,
      login: this.userForm.get('login').value,
      name: this.userForm.get('name').value,
      sername: this.userForm.get('sername').value,
      phone: this.userForm.get('phone').value,
      role: this.userForm.get('role').value,
      password: this.userForm.get('password').value
    };

    this.addUser.emit(newUser);
    this.userForm.reset();
  }

}
