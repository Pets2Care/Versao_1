//usado pelo guard

import {
  HTTP_INTERCEPTORS,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../shared/services/auth.service';
import { tokenService } from '../shared/utils/localStorage';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private route: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let authReq = req;
    const token = this.authService.getToken();
    if (token != null) {
      authReq = req.clone({
        headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token),
      });
    }
    return next.handle(authReq);
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
];
