import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Highlight } from '../models/highlight.model';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class HighlightsService {
  private dataStream = new BehaviorSubject<Highlight[]>([]);

  public get(): Observable<Highlight[]> {
    return this.dataStream.asObservable();
  }

  constructor(private http: HttpClient, private authService: AuthService) {}

  public fetchAll(): Observable<any> {
    return this.http.get<any>(`${environment.API_URL}/highlights`).pipe(
      tap(response => {
        this.dataStream.next(response);
      }),
    );
  }

  public fetchById(id: number | string): Observable<Highlight> {
    return this.http.get<any>(`${environment.API_URL}/highlight/${id}`).pipe(
      tap(response => {
        this.dataStream.next(response);
      }),
    );
  }
}
