import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { User } from '../shared/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  private data: User;

  constructor(private storage: Storage) {
    this.loadData();
  }

  private async loadData() {
    console.log('UserDataService -> loadData()');
    const storageData = (await this.storage.get('user')) as User;
    if (storageData) {
      this.data = storageData;
    }
  }

  private storeData() {
    this.storage.set('user', this.data);
  }

  public get(): User {
    return this.data;
  }

  public set(newData: User): void {
    this.data = newData;
    this.storeData();
  }

  public clear(): void {
    console.log('UserDataService -> clear()');
    this.storage.remove('user');
  }
}
