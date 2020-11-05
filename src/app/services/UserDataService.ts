import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { User } from '../interfaces/User';

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
      console.log(
        'UserDataService -> loadData() -> storageData =',
        storageData,
      );
      this.data = storageData;
    }
  }

  private storeData() {
    console.log('UserDataService -> storeData() -> this.data = ', this.data);
    this.storage.set('user', this.data);
  }

  public get(): User {
    console.log('UserDataService -> get() -> this.data = ', this.data);
    return this.data;
  }

  public set(newData: User): void {
    console.log('UserDataService -> set() -> newData = ', newData);
    this.data = newData;
    this.storeData();
  }

  public clear(): void {
    console.log('UserDataService -> clear()');
    this.storage.remove('user');
  }
}
