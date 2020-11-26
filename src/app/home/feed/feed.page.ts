import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

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
  private petsSubscription: Subscription;
  public isLoading = false;
  public petsData: Readonly<Pet[]>;
  public currentUser: User;
  public selectedSegment: string;

  constructor(
    private petsDataService: PetsDataServiceNew,
    private userDataService: UserDataService,
  ) {}

  ngOnInit(): void {
    this.currentUser = this.userDataService.get();
    this.selectedSegment = 'featured';
    this.petsSubscription = this.petsDataService.get().subscribe(data => {
      this.petsData = data;
    });
  }

  ionViewWillEnter(): void {
    this.isLoading = true;
    this.petsDataService.fetch().subscribe(() => {
      this.isLoading = false;
    });
  }

  ngOnDestroy(): void {
    if (this.petsSubscription) {
      this.petsSubscription.unsubscribe();
    }
  }
}
