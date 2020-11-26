import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { take, map, tap, switchMap } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Pet } from '../interfaces/Pet';

@Injectable({
  providedIn: 'root',
})
export class PetsDataServiceNew {
  private dataStream = new BehaviorSubject<Pet[]>([]);

  public get(): Observable<Pet[]> {
    return this.dataStream.asObservable();
  }

  constructor(private http: HttpClient) {}

  public fetch(): Observable<any> {
    return this.http.get<any>(`${environment.API_URL}/adverts`).pipe(
      tap(response => {
        this.dataStream.next(response);
      }),
    );
  }

  public getById(id: string): Observable<any> {
    return this.http.get<any>(`${environment.API_URL}/adverts/${id}`).pipe(
      tap(response => {
        this.dataStream.next(response);
      }),
    );
  }

  public create(data: any): Observable<any> {
    console.log('petDataService -> create -> data = ', data);
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

    return this.http.post<any>(`${environment.API_URL}/adverts`, formData).pipe(
      tap(response => {
        console.log('response = ', response);
      }),
    );
  }

  public update(data: Pet): void {}

  public delete(id: string): void {}

  // uploadImage(image: File) {
  //   const uploadData = new FormData();
  //   uploadData.append('image', image);

  //   return this.authService.token.pipe(
  //     take(1),
  //     switchMap(token => {
  //       return this.http.post<{ imageUrl: string; imagePath: string }>(
  //         'https://us-central1-ionic-angular-course.cloudfunctions.net/storeImage',
  //         uploadData,
  //         { headers: { Authorization: 'Bearer ' + token } }
  //       );
  //     })
  //   );
  // }

  // addPlace(
  //   title: string,
  //   description: string,
  //   price: number,
  //   dateFrom: Date,
  //   dateTo: Date,
  //   location: PlaceLocation,
  //   imageUrl: string
  // ) {
  //   let generatedId: string;
  //   let fetchedUserId: string;
  //   let newPlace: Place;
  //   return this.authService.userId.pipe(
  //     take(1),
  //     switchMap(userId => {
  //       fetchedUserId = userId;
  //       return this.authService.token;
  //     }),
  //     take(1),
  //     switchMap(token => {
  //       if (!fetchedUserId) {
  //         throw new Error('No user found!');
  //       }
  //       newPlace = new Place(
  //         Math.random().toString(),
  //         title,
  //         description,
  //         imageUrl,
  //         price,
  //         dateFrom,
  //         dateTo,
  //         fetchedUserId,
  //         location
  //       );
  //       return this.http.post<{ name: string }>(
  //         `https://ionic-angular-course.firebaseio.com/offered-places.json?auth=${token}`,
  //         {
  //           ...newPlace,
  //           id: null
  //         }
  //       );
  //     }),
  //     switchMap(resData => {
  //       generatedId = resData.name;
  //       return this.places;
  //     }),
  //     take(1),
  //     tap(places => {
  //       newPlace.id = generatedId;
  //       this.data.next(places.concat(newPlace));
  //     })
  //   );

  // }

  // updatePlace(placeId: string, title: string, description: string) {
  //   let updatedPlaces: Place[];
  //   let fetchedToken: string;
  //   return this.authService.token.pipe(
  //     take(1),
  //     switchMap(token => {
  //       fetchedToken = token;
  //       return this.places;
  //     }),
  //     take(1),
  //     switchMap(places => {
  //       if (!places || places.length <= 0) {
  //         return this.fetch();
  //       } else {
  //         return of(places);
  //       }
  //     }),
  //     switchMap(places => {
  //       const updatedPlaceIndex = places.findIndex(pl => pl.id === placeId);
  //       updatedPlaces = [...places];
  //       const oldPlace = updatedPlaces[updatedPlaceIndex];
  //       updatedPlaces[updatedPlaceIndex] = new Place(
  //         oldPlace.id,
  //         title,
  //         description,
  //         oldPlace.imageUrl,
  //         oldPlace.price,
  //         oldPlace.availableFrom,
  //         oldPlace.availableTo,
  //         oldPlace.userId,
  //         oldPlace.location
  //       );
  //       return this.http.put(
  //         `https://ionic-angular-course.firebaseio.com/offered-places/${placeId}.json?auth=${fetchedToken}`,
  //         { ...updatedPlaces[updatedPlaceIndex], id: null }
  //       );
  //     }),
  //     tap(() => {
  //       this.data.next(updatedPlaces);
  //     })
  //   );
  // }
}
