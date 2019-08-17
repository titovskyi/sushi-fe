import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import {AuthenticationService} from '../_services/authentication.service';

import {select, Store} from '@ngrx/store';
import {AppStateInterface} from '../store/state/app.state';
import {getAdminUser} from '../store/selectors/admin-user.selectors';

import {Observable, of} from 'rxjs';
import {catchError, switchMap} from 'rxjs/operators';
import {AdminUser} from '../_models/adminUser';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  private adminUser$: AdminUser;

  // #######################################

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private store: Store<AppStateInterface>
  ) {}

  // #######################################

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.authService.getToken()) {
      this.router.navigateByUrl('/login');

      return false;
    }

    return true;
  }

  // #######################################
}





