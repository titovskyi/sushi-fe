import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import {AuthenticationService} from '../_services/authentication.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  // #######################################

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}

  // #######################################

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const token: string = this.authService.getToken();
    if (token) {
      this.router.navigate(['panel/products']);
      return true;
    }

    this.router.navigate(['login']);
    return false;
  }

  // #######################################
}





