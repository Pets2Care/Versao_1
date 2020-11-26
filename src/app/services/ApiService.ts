// import {
//   HttpHeaders,
//   HttpClient,
//   HttpResponse,
//   HttpParams,
// } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable, throwError } from 'rxjs';
// import { map, catchError } from 'rxjs/operators';

// import { environment } from '../../environments/environment';

// @Injectable()
// export class ApiService {
//   constructor(private http: HttpClient) {}

//   private setHeaders(): HttpHeaders {
//     const headersConfig = {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json',
//     };

//     return new HttpHeaders(headersConfig);
//   }

//   private formatErrors(error: any) {
//     return throwError(error.json());
//   }

//   get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
//     return this.http
//       .get(`${environment.API_URL}/${path}`, {
//         headers: this.setHeaders(),
//         params: params,
//       })
//       .pipe(
//         catchError(this.formatErrors),
//         map((res: HttpResponse<any>) => res.body.json()),
//       );
//   }

//   put(path: string, body: Record<string, unknown> = {}): Observable<any> {
//     return this.http
//       .put(`${environment.API_URL}/${path}`, JSON.stringify(body), {
//         headers: this.setHeaders(),
//       })
//       .pipe(
//         catchError(this.formatErrors),
//         map((res: HttpResponse<any>) => res.body.json()),
//       );
//   }

//   post(path: string, body: Record<string, unknown> = {}): Observable<any> {
//     return this.http
//       .post(`${environment.API_URL}/${path}`, JSON.stringify(body), {
//         headers: this.setHeaders(),
//       })
//       .pipe(
//         catchError(this.formatErrors),
//         map((res: HttpResponse<any>) => res.body.json()),
//       );
//   }

//   delete(path: string): Observable<any> {
//     return this.http
//       .delete(`${environment.API_URL}/${path}`, { headers: this.setHeaders() })
//       .pipe(
//         catchError(this.formatErrors),
//         map((res: HttpResponse<any>) => res.body.json()),
//       );
//   }
// }
