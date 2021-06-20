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
      title: 'Cresce o número de adoções e de abandono de animais na pandemia',
      content:
        '<p>De acordo com a UIPA – União Internacional Protetora dos Animais, a procura de adoção aumentou cerda de 400% desde o inicio da pandemia, sendo esse o reflexo da quarentena, momento em que a maioria das pessoas passaram mais tempo reclusas em suas casas.</p><p>No entanto a adoção impulsiva pode ser prejudicial a partir do momento em que não é levado em consideração o futuro da relação humano-animal, das condições financeiras e de moradia.</p><p>Dados da Organização Mundial da Saúde apontam que, no Brasil, existem cerca de 30 milhões de animais abandonados; desse total, 10 milhões são gatos, e 20 milhões, cachorros. Os traumas de um abandono deixam várias cicatrizes na vida de um pet, muitas vezes é necessário a ajuda de um veterinário ou adestrador para reverter esse quadro.</p>Leia a matéria na íntegra:<br><a target="_blank" rel="external" href="https://jornal.usp.br/atualidades/cresce-o-numero-de-adocoes-e-de-abandono-de-animais-na-pandemia/">https://jornal.usp.br/atualidades/cresce-o-numero-de-adocoes-e-de-abandono-de-animais-na-pandemia/</a></p>',
      image:
        'https://drive.google.com/uc?export=view&id=1L6i4lnahG8q-nRFrD7fwdafY9W06XCZi',
      createdAt: '2021-06-21',
      isSpotlight: true,
    },
    {
      id: 2,
      title: 'Tá frio? Dicas para aquecer seu cãozinho no inverno',
      content:
        '<p>O Brasil perde apenas para os Estados Unidos quando o assunto é o número de PETs, e apesar de ser um considerado um país tropical, o Brasil, tem dias de muito frio, por isso temos algumas dicas de como cuidar de seu pet nesses dias:</p><ul><li><strong>Mantenha seu pet agasalhado:</strong> O uso de roupinhas é aconselhado por grande parte dos veterinários, no entanto é importante prestar atenção aos enfeites presentes na roupa para que não aja incidentes.</li><li><strong>Aposte em uma cama quentinha:</strong> o uso cobertores um pouco mais grossos durante o inverno é o ideal para manter o animalzinho aquecido.</li><li><strong>Estimule brincadeiras em casa:</strong> Brincadeiras ao ar livre podem não ser boas para ele e para a sua saúde durante o frio</li><li>Aumente o intervalo entre as tosas: Os pelos ajudam a mantê-los aquecidos</li><li><strong>Considere a vacina para a gripe:</strong> assim como os humanos, os pets estão sujeitos a gripe, então se ele frequenta creches e hotéis, o ideal é conversar com o veterinário sobre isso.</li></ul></p>Leia a matéria na íntegra:<br><a target="_blank" rel="external" href="https://opresenterural.com.br/ta-frio-dicas-para-aquecer-seu-caozinho-no-inverno/">https://opresenterural.com.br/ta-frio-dicas-para-aquecer-seu-caozinho-no-inverno/</a></p>',
      image:
        'https://drive.google.com/uc?export=view&id=1s5JJkOQDLGfQT_LIDDYLPpZ7vJZrU6n5',
      createdAt: '2020-06-20',
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
