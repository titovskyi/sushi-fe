import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../_services/authentication.service';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import {Store} from '@ngrx/store';
import {Login} from '../store/actions/admin-user.actions';
import {User} from '../panel/_models/user';
import {adminUserReducer} from '../store/reducers/admin-user.reducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm = new FormGroup({
    login: new FormControl ('', [Validators.required, Validators.minLength(4)]),
    password: new FormControl ('', [Validators.required, Validators.minLength(4)])
  });

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private fb: FormBuilder,
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.store.subscribe((res: any) => {
      console.log(res, 'result');
    });
  }

  get userLogin() { return this.loginForm.get('login'); }
  get password() { return this.loginForm.get('password'); }

  login() {
    this.store.dispatch(new Login(this.loginForm.value));
  }


  some() {
    this.store.select('adminUser').subscribe((res) => {
      console.log(res.adminUser);
    })
  }
}
