import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable} from 'rxjs';

import { environment } from '../../environments/environment';

import { AuthenticationService } from '../_services/authentication.service';
import {Router} from '@angular/router';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    const token = this.authService.getToken();
    const expireTime = this.authService.getExpiration();

    // @ts-ignore
    // if (Date.now() - localStorage.getItem('expire') > 10000) {
    //   localStorage.clear();
    //   this.router.navigateByUrl('/login');
    // }

    req = req.clone({
      setHeaders: {
        auth: `${token}`
      }
      });

    return next.handle(req);
  }
}
