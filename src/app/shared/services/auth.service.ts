import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { LoginRequest } from '../models/loginRequest.model';
import { RegisterRequest } from '../models/registerRequest.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  register(registerRequest: RegisterRequest): Observable<User> {
    const formData = this.formatFormData(registerRequest);

    return this.httpClient
      .post<User>(`${environment.API_URL}/register`, formData)
      .pipe(
        tap(response => {
          console.log('register response', response);
          const responseData = response; //this.parseJwt(response?.token);
          //console.log('parsed response', responseData);
          this.setResponseData(responseData);
        }),
      );
  }

  login(loginRequest: LoginRequest): Observable<User> {
    return this.httpClient
      .post<User>(`${environment.API_URL}/authenticate`, loginRequest)
      .pipe(
        tap(response => {
          console.log('login response', response);
          const responseData = response; //this.parseJwt(response?.token);
          //console.log('parsed response', responseData);
          this.setResponseData(responseData);
        }),
      );
  }

  delete(): Observable<any> {
    return this.httpClient
      .delete(`${environment.API_URL}/user/${this.getUser().id}`)
      .pipe(
        tap(() => {
          this.logout();
        }),
      );
  }

  setResponseData(responseData: User): void {
    if (responseData) {
      const loggedUser = {
        id: responseData?.id,
        name: responseData?.name,
        email: responseData?.email,
        gender: responseData?.gender,
        cep: responseData?.cep,
        street: responseData?.street,
        number: responseData?.number,
        complement: responseData?.complement,
        neighborhood: responseData?.neighborhood,
        city: responseData?.city,
        state: responseData?.state,
        birthDate: responseData?.birthDate,
        telephone: responseData?.telephone,
        description: responseData?.description,
        website: responseData?.website,
        avatar: responseData?.avatar,
        createdAt: responseData?.createdAt,
        token: responseData?.token,
      };

      console.log('loggedUser', loggedUser);
      console.log('loggedToken', responseData?.token);

      this.setUser(loggedUser);
      this.setToken(loggedUser?.token);
    }
  }

  private formatFormData(data: RegisterRequest): FormData {
    const formData = new FormData();
    formData.append('email', data?.email);
    formData.append('password', data?.password);
    formData.append('name', data?.name);
    formData.append('gender', data?.gender);
    formData.append('cep', data?.cep);
    formData.append('street', data?.street);
    formData.append('number', data?.number);
    formData.append('complement', data?.complement);
    formData.append('neighborhood', data?.neighborhood);
    formData.append('city', data?.city);
    formData.append('state', data?.state);
    formData.append('birthDate', data?.birthDate);
    formData.append('telephone', data?.telephone);
    formData.append('description', data?.description);
    formData.append('website', data?.website);
    formData.append(
      'avatar',
      data?.avatar ? Array.from(data?.avatar)[0] : undefined,
    );

    return formData;
  }

  logout(): void {
    console.log('logout');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  isLogged(): boolean {
    return !!(this.getUser() && this.getToken());
  }

  setUser(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getUser(): User {
    const localUser = JSON.parse(localStorage.getItem('user')) as User;
    return localUser;
  }

  getToken(): string | undefined {
    const localToken = localStorage.getItem('token');
    return localToken;
  }

  isValidToken(): boolean {
    if (!this.getToken()) {
      return false;
    }
    const tokenInfo = this.parseJwt(this.getToken() as string);
    console.log('tokenInfo.exp * 1000', tokenInfo.exp * 1000);
    return new Date() < new Date(tokenInfo.exp * 1000);
  }

  parseJwt(jwtObject: string): any {
    const base64Url = jwtObject.split('.')[1];
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
