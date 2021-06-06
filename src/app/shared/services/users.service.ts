import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { User } from '../models/user.model';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class UsersDataService {
  private dataStream = new BehaviorSubject<User[]>([]);

  public get(): Observable<User[]> {
    return this.dataStream.asObservable();
  }

  constructor(private http: HttpClient, private authService: AuthService) {}

  public fetchAll(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.API_URL}/users`).pipe(
      tap(response => {
        this.dataStream.next(response);
      }),
    );
  }

  public fetchById(id: number | string): Observable<User> {
    return this.http.get<User>(`${environment.API_URL}/spolights/user/${id}`);
  }

  public fetchSelf(): Observable<User> {
    return this.http.get<User>(`${environment.API_URL}/user/`);
  }
}
