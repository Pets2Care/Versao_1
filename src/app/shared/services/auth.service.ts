import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { LoginRequest } from '../models/loginRequest.model';
import { LoginResponse } from '../models/loginResponse.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: any;
  token: string | undefined;

  constructor(private httpClient: HttpClient) {}

  login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return this.httpClient
      .post<LoginResponse>(`${environment.API_URL}/user`, loginRequest)
      .pipe(
        tap(response => {
          const responseData = this.parseJwt(response.token);

          const loggedUser = {
            id: responseData.id,
            name: responseData.name,
            email: responseData.email,
            gender: responseData.gender,
            cep: responseData.cep,
            street: responseData.street,
            number: responseData.number,
            complement: responseData.complement,
            neighborhood: responseData.neighborhood,
            city: responseData.city,
            state: responseData.state,
            birthDate: responseData.birthDate,
            telephone: responseData.telephone,
            createdAt: responseData.createdAt,
          };

          this.setUser(loggedUser);
          this.setToken(response.token);
        }),
      );
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    delete this.user;
    delete this.token;
  }

  isLogged(): boolean {
    return !!(this.getUser() && this.getToken());
  }

  getUser(): User {
    if (this.user) {
      return this.user;
    }

    const localUser = localStorage.getItem('user');
    if (localUser) {
      this.user = JSON.parse(localUser) as User;
    }
    return this.user;
  }

  setUser(user: User | null): void {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));
  }

  getToken(): string | undefined {
    if (this.token) {
      return this.token;
    }

    const localToken = localStorage.getItem('token');
    if (localToken) {
      this.token = localToken;
    }

    return this.token;
  }

  setToken(token: string): void {
    this.token = token;
    localStorage.setItem('token', token);
  }

  isValidToken(): boolean {
    if (!this.getToken()) {
      return false;
    }
    const tokenInfo = this.parseJwt(this.getToken() as string);
    return new Date() < new Date(tokenInfo.exp * 1000);
  }

  parseJwt(token: string): any {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join(''),
    );

    return JSON.parse(jsonPayload);
  }
}
