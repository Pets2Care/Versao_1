import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Pet } from '../../interfaces/Pet';
import { User } from '../../interfaces/User';
import { PetsDataServiceNew } from '../../services/PetsDataServiceNew';
import { UserDataService } from '../../services/UserDataService';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit, OnDestroy {
  private subject = new Subject();
  public isLoading = false;
  public petsData: Readonly<Pet[]>;
  public userData: User;
  public selectedSegment = 'featured';

  constructor(
    private petsDataService: PetsDataServiceNew,
    private userDataService: UserDataService,
  ) {}

  ngOnInit(): void {
    this.userData = this.userDataService.get();
    this.petsDataService
      .get()
      .pipe(takeUntil(this.subject))
      .subscribe(data => {
        this.petsData = data;
      });
  }

  ngOnDestroy(): void {
    this.subject.next();
    this.subject.complete();
  }

  //Preciso desse? Ele acaba dando um novo fetch toda vez que entra nessa tela
  ionViewWillEnter(): void {
    this.isLoading = true;
    this.petsDataService.fetch().subscribe(() => {
      this.isLoading = false;
    });
  }

  filterArray(ev: any): Readonly<Pet[]> {
    this.result = this.petsData;
    const val = ev.target.value;
    if (val && val.trim() !== '') {
      this.result = this.result.filter(item => {
        return (
          item.name.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
          item.place.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
          item.userName.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
          item.age.toString().indexOf(val.toLowerCase()) > -1 ||
          item.description.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
          item.createdAt.toLowerCase().indexOf(val.toLowerCase()) > -1
        );
      });
    } else {
      return this.petsData;
    }
  }
}
