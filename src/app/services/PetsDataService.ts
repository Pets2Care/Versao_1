import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

import pets from '../pets.js';

@Injectable()
export class PetsDataService {
  private storedPetsData = new BehaviorSubject<any>(pets);
  public petsData = this.storedPetsData.asObservable();

  constructor() {
    console.log('petsData = ', this.petsData);
  }

  changePetsData(newData: any): void {
    this.storedPetsData.next(newData);
  }
}
