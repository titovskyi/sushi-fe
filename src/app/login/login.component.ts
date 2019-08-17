import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../_services/authentication.service';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import {select, Store} from '@ngrx/store';
import {Login} from '../store/actions/admin-user.actions';
import {getAdminUser} from '../store/selectors/admin-user.selectors';
import {AdminUser} from '../_models/adminUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private adminUser: AdminUser = null;

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
    this.store.pipe(
      select(getAdminUser)
    ).subscribe((res) => {
      this.check();
    });
  }

  get userLogin() { return this.loginForm.get('login'); }
  get password() { return this.loginForm.get('password'); }

  login() {
    this.store.dispatch(new Login(this.loginForm.value));
  }

  check() {
    if (this.adminUser) {
      this.router.navigateByUrl('/login');
    } else {
      this.router.navigateByUrl('/panel');
    }
  }
}
