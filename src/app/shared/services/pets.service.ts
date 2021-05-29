import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Pet } from '../models/pet.model';
import { PetRequest } from '../models/petRequest.model';

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

  public fetchByUserId(userId: number | string): Observable<Pet[]> {
    return this.http
      .get<any>(`${environment.API_URL}/pets/user/${userId}`)
      .pipe(
        tap(response => {
          this.dataStream.next(response);
        }),
      );
  }

  public fetchById(id: number | string): Observable<Pet> {
    return this.http.get<any>(`${environment.API_URL}/pets/${id}`).pipe(
      tap(response => {
        this.dataStream.next(response);
      }),
    );
  }

  private formatFormData(data: PetRequest): FormData {
    const formData = new FormData();
    formData.append('id', data?.id?.toString());
    formData.append('name', data?.name);
    formData.append('birthDate', data?.birthDate);
    formData.append('gender', data?.gender);
    formData.append('type', data?.type);
    formData.append('breed', data?.breed);
    formData.append('description', data?.description);
    formData.append('vaccinated', data?.vaccinated?.toString());
    formData.append('dewormed', data?.dewormed?.toString());
    formData.append('castrated', data?.castrated?.toString());
    formData.append('deficit', data?.deficit?.toString());
    formData.append('userId', data?.userId?.toString());
    formData.append('cep', data?.cep);
    formData.append('street', data?.street);
    formData.append('number', data?.number);
    formData.append('complement', data?.complement);
    formData.append('neighborhood', data?.neighborhood);
    formData.append('city', data?.city);
    formData.append('state', data?.state);

    if (data?.images) {
      console.log('imagens anexadas, passando no for');
      for (const image of Array.from(data.images)) {
        console.log('image = ', image);
        formData.append('images', image);
      }
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

    return this.http.put<any>(`${environment.API_URL}/pets`, formData).pipe(
      tap(response => {
        console.log('update response = ', response);
        this.fetch().subscribe();
      }),
    );
  }

  public delete(id: number): Observable<any> {
    console.log('PetsDataService -> delete() -> chamou -> id = ', id);
    return null;
    // return this.http.delete<any>(`${environment.API_URL}/pet/${id}`).pipe(
    //   tap(response => {
    //     console.log('delete response = ', response);
    //     this.fetch().subscribe();
    //   }),
    // );
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

  public pause(id: number | string): Observable<any> {
    console.log('PetsDataService -> pause() -> petId = ', id);
    return null;
    // return this.http.put<any>(`${environment.API_URL}/pet/pause/`, id).pipe(
    //   tap(response => {
    //     console.log('update response = ', response);
    //     this.fetch().subscribe();
    //   }),
    // );
  }
}
