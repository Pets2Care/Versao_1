import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
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

  public fetchAll(): Observable<Pet[]> {
    return this.http.get<Pet[]>(`${environment.API_URL}/pets`).pipe(
      tap(response => {
        this.dataStream.next(response);
      }),
    );
  }

  public fetchAllSpotlight(): Observable<Pet[]> {
    return this.http
      .get<Pet[]>(`${environment.API_URL}/spotlights/adverts`)
      .pipe(
        tap(response => {
          this.dataStream.next(response);
        }),
      );
  }

  public fetchByUserId(id?: number | string): Observable<Pet[]> {
    return this.http.get<any>(`${environment.API_URL}/pets/user/${id}`).pipe(
      tap(response => {
        this.dataStream.next(response);
      }),
    );
  }

  //TODO: verificar onde usava a fetchByUserId com os dados do proprio usuário e substituir por essa funcao
  public fetchMyPets(): Observable<Pet[]> {
    return this.http.get<any>(`${environment.API_URL}/pets/user/`).pipe(
      tap(response => {
        this.dataStream.next(response);
      }),
    );
  }

  public fetchById(id: number | string): Observable<Pet> {
    return this.http.get<any>(`${environment.API_URL}/pet/${id}`).pipe(
      tap(response => {
        this.dataStream.next(response);
      }),
    );
  }

  private formatFormData(data: PetRequest): FormData {
    const formData = new FormData();
    data?.id && formData.append('id', data?.id?.toString());
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
    data?.isActive && formData.append('isActive', data?.isActive?.toString());
    data?.isSpotlight &&
      formData.append('isSpotlight', data?.isSpotlight?.toString());

    if (data?.images) {
      console.log('imagens anexadas, passando no for');
      for (const image of Array.from(data.images)) {
        console.log('image = ', image);
        formData.append('images', image);
      }
    }

    return formData;
  }

  public create(data: any): Observable<Pet> {
    console.log('petDataService -> create -> data = ', data);
    const formData = this.formatFormData(data);

    return this.http.post<Pet>(`${environment.API_URL}/pets`, formData).pipe(
      tap(response => {
        console.log('create response = ', response);
        this.fetchAll().subscribe();
      }),
    );
  }

  public update(data: any): Observable<any> {
    console.log('petDataService -> update -> data = ', data);
    const formData = this.formatFormData(data);
    return this.http
      .put<any>(`${environment.API_URL}/pet/${data?.id}`, formData)
      .pipe(
        tap(response => {
          console.log('update response = ', response);
          this.fetchAll().subscribe();
        }),
      );
  }

  public delete(id: number): Observable<any> {
    console.log('PetsDataService -> delete() -> chamou -> id = ', id);
    return this.http.delete<any>(`${environment.API_URL}/pet/${id}`).pipe(
      tap(response => {
        console.log('delete response = ', response);
        this.fetchAll().subscribe();
      }),
    );
  }

  public saveFavorite(): Observable<any> {
    console.log('saveFavorite');
    return of('sucesso save favorite');
  }

  public contactDonor(): Observable<any> {
    console.log('contactDonor');
    return of('sucesso contact donor');
  }
}
