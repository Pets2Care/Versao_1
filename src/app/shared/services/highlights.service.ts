import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Highlight } from '../models/highlight.model';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class HighlightsService {
  private mockData: Highlight[] = [
    {
      id: 1,
      title: 'Destaque 01',
      content:
        "<p>Esse é o conteúdo do meu destaque 01. Um item bem comprido</p><p>Ele pode ser formatado como um arquivo html, e pode até mesmo mesmo ter imagens anexadas:</p><img src='https://via.placeholder.com/200' alt='imagem mockada' width='200' height='200'><p>Só fica meio ruim de ler e alterar manualmente, mas funciona!</p>",
      image: 'https://via.placeholder.com/300',
      createdAt: '2021-01-01',
      isSpotlight: true,
    },
    {
      id: 2,
      title: 'Destaque 02',
      content:
        "<p>Esse é o conteúdo do meu destaque 02. Um item bem comprido</p><p>Ele pode ser formatado como um arquivo html, e pode até mesmo mesmo ter imagens anexadas:</p><img src='https://via.placeholder.com/200' alt='imagem mockada' width='200' height='200'><p>Só fica meio ruim de ler e alterar manualmente, mas funciona!</p>",
      image: 'https://via.placeholder.com/300',
      createdAt: '2020-01-01',
      isSpotlight: true,
    },
    {
      id: 3,
      title: 'Destaque 03',
      content:
        "<p>Esse é o conteúdo do meu destaque 03. Um item bem comprido</p><p>Ele pode ser formatado como um arquivo html, e pode até mesmo mesmo ter imagens anexadas:</p><img src='https://via.placeholder.com/200' alt='imagem mockada' width='200' height='200'><p>Só fica meio ruim de ler e alterar manualmente, mas funciona!</p>",
      image: 'https://via.placeholder.com/300',
      createdAt: '2019-01-01',
      isSpotlight: true,
    },
  ];

  private dataStream = new BehaviorSubject<Highlight[]>([]);

  public get(): Observable<Highlight[]> {
    return this.dataStream.asObservable();
  }

  constructor(private http: HttpClient, private authService: AuthService) {}

  public fetchAll(): Observable<Highlight[]> {
    return of(this.mockData);
  }

  public fetchById(id: number | string): Observable<Highlight> {
    return of(this.mockData.find(item => item.id === id));
  }
}
