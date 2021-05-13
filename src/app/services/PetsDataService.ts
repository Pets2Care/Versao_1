import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { take, map, tap, switchMap, filter } from 'rxjs/operators';
import { format } from 'util';

import { environment } from '../../environments/environment';
import { Pet } from '../interfaces/Pet';

@Injectable({
  providedIn: 'root',
})
export class PetsDataService {
  private dataStream = new BehaviorSubject<Pet[]>([]);

  public get(): Observable<Pet[]> {
    return this.dataStream.asObservable();
  }

  constructor(private http: HttpClient) {}

  public fetch(): Observable<any> {
    return this.http.get<any>(`${environment.API_URL}/pets`).pipe(
      tap(response => {
        this.dataStream.next(response);
      }),
    );
  }

  public getById(id: number): Observable<any> {
    return this.http.get<any>(`${environment.API_URL}/pets/${id}`).pipe(
      tap(response => {
        this.dataStream.next(response);
      }),
    );
  }

  private formatFormData(data: any): FormData {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('place', data.place);
    formData.append('userName', data.userName);
    formData.append('userId', data.userId.toString());
    formData.append('age', data.age.toString());
    formData.append('type', data.type);
    formData.append('description', data.description);

    for (const image of data.images) {
      formData.append('images', image);
    }

    return formData;
  }

  public create(data: any): Observable<any> {
    console.log('petDataService -> create -> data = ', data);
    const formData = this.formatFormData(data);

    return this.http.post<any>(`${environment.API_URL}/pets`, formData).pipe(
      tap(response => {
        console.log('create response = ', response);
        this.fetch().subscribe();
      }),
    );
  }

  public update(data: any): Observable<any> {
    console.log('petDataService -> update -> data = ', data);
    const formData = this.formatFormData(data);

    return this.http
      .put<any>(`${environment.API_URL}/pet/${data.id}`, formData)
      .pipe(
        tap(response => {
          console.log('update response = ', response);
          this.fetch().subscribe();
        }),
      );
  }

  public delete(id: number): Observable<any> {
    console.log('PetsDataService -> delete() -> chamou -> id = ', id);
    return this.http.delete<any>(`${environment.API_URL}/pet/${id}`).pipe(
      tap(response => {
        console.log('delete response = ', response);
        this.fetch().subscribe();
      }),
    );
  }

  public deleteByUserId(userId: number): Observable<any> {
    console.log(
      'PetsDataService -> deleteByUserId() -> chamou -> userId = ',
      userId,
    );
    return this.http.delete<any>(`${environment.API_URL}/pets/${userId}`).pipe(
      tap(response => {
        console.log('delete response = ', response);
        this.fetch().subscribe();
      }),
    );
  }
}
