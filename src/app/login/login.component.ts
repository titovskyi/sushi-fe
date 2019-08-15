import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../_services/authentication.service';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm = new FormGroup({
    username: new FormControl ('', [Validators.required, Validators.minLength(4)]),
    password: new FormControl ('', [Validators.required, Validators.minLength(4)])
  });


  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }

  login() {
    this.authService.login(this.loginForm.value).subscribe(
      (res: any) => {
        console.log(res);
        // const userInfo = JSON.parse(res);
        if (res.token) {
          localStorage.setItem('token', res.token);
          this.router.navigate(['panel']);
        }
      }, (err) => {
        this.router.navigate(['']);
      }
    );
  }



}
