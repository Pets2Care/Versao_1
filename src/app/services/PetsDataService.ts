import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { environment } from '../../environments/environment';
import { Pet } from '../interfaces/Pet';
import pets from '../pets.js';

@Injectable({
  providedIn: 'root',
})
export class PetsDataService {
  private data: Pet[] = [];

  constructor(private storage: Storage, private http: HttpClient) {
    this.loadData();
  }

  private async loadData() {
    const storageData = (await this.storage.get('pets')) as Pet[];
    if (storageData) {
      this.data.push(...storageData);
    } else {
      this.data.push(...pets);
    }
  }

  private storeData() {
    this.storage.set('pets', this.data);
  }

  public getAll(): Readonly<Readonly<Pet>[]> {
    return this.data;
  }

  public getById(id: number): Pet {
    return { ...this.data.find(i => i.id === id) };
  }

  public getByUserId(userId: number): Readonly<Readonly<Pet>[]> {
    const returnValue = [...this.data.filter(i => i.userId === userId)];
    return returnValue;
  }

  public update(entry: Pet): number {
    const id = this.data.findIndex(i => i.id === entry.id);
    if (id >= 0) {
      this.data[id] = entry;
      this.storeData();
    }

    return id;
  }

  public create(entry: Pet): number {
    const currentId = Math.max(...this.data.map(i => i.id)) + 1;
    this.data.push({ ...entry, id: currentId });
    this.storeData();
    return currentId;
  }

  public delete(entry: Pet): number {
    const id = this.data.findIndex(i => i.id === entry.id);
    if (id >= 0) {
      this.data.splice(id, 1);
      this.storeData();
    }

    return id;
  }

  public deleteByUserId(id: number): number {
    const newData = this.data.filter(pet => pet.userId !== id);
    this.data = [...newData];
    this.storeData();

    return newData.length;
  }

  public async getAllAPI(): Promise<Pet[]> {
    const url = `${environment.API_URL}/pets`;
    return (await this.http.get(url).toPromise()) as Pet[];
  }

  public async getByIdAPI(id: number): Promise<Pet> {
    const url = `${environment.API_URL}/pets/${id}`;
    return (await this.http.get(url).toPromise()) as Pet;
  }
}
