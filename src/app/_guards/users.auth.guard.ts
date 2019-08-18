import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import {AuthenticationService} from '../_services/authentication.service';

@Injectable({providedIn: 'root'})
export class UsersAuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.getRole() !== 'ADMIN') {
      this.router.navigateByUrl('/panel/products');

      return false;
    }

    return true;
  }
}





