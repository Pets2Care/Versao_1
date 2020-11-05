import { Component, OnInit } from '@angular/core';

import { Pet } from '../../interfaces/Pet';
import { User } from '../../interfaces/User';
import { PetsDataService } from '../../services/PetsDataService';
import { UserDataService } from '../../services/UserDataService';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  public petsData: Readonly<Pet[]>;
  public currentUser: User;
  public selectedSegment: string;

  constructor(
    private petsDataService: PetsDataService,
    private userDataService: UserDataService,
  ) {
    this.loadData();
  }

  ngOnInit(): void {
    this.selectedSegment = 'featured';
  }

  loadData() {
    this.petsData = this.petsDataService.getAll();
    this.currentUser = this.userDataService.get();
  }
}
