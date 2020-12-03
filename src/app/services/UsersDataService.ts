import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { User } from '../interfaces/User';
import users from '../users.js';

@Injectable({
  providedIn: 'root',
})
export class UsersDataService {
  private data: User[] = [];

  constructor(private storage: Storage) {
    this.loadData();
  }

  private async loadData() {
    const storageData = (await this.storage.get('users')) as User[];
    if (storageData) {
      this.data.push(...storageData);
    } else {
      this.data.push(...users);
    }
  }

  private storeData() {
    this.storage.set('users', this.data);
  }

  public getAll(): Readonly<Readonly<User>[]> {
    return this.data;
  }

  public getById(id: number): User {
    return { ...this.data.find(i => i.id === id) };
  }

  public update(entry: User): number {
    console.log('UsersDataService -> update, entry = ', entry);
    const id = this.data.findIndex(i => i.id === entry.id);
    if (id >= 0) {
      this.data[id] = entry;
      this.storeData();
      console.log('UsersDataService -> update, was updated');
    }
    return id;
  }

  public create(entry: User): number {
    const currentId = Math.max(...this.data.map(i => i.id)) + 1;
    this.data.push({ ...entry, id: currentId });
    this.storeData();
    return currentId;
  }

  public delete(entry: User): number {
    const id = this.data.findIndex(i => i.id === entry.id);
    if (id >= 0) {
      this.data.splice(id, 1);
      this.storeData();
    }
    return id;
  }
}
