import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { User } from 'src/app/shared/models/user.model';
import { PetsDataService } from 'src/app/shared/services/pets.service';
import { UsersDataService } from 'src/app/shared/services/users.service';

import { Pet } from '../../../../shared/models/pet.model';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  //private subject = new Subject();
  @Input() isActive = false;
  public isLoadingPetsData = false;
  public isLoadingUsersData = false;
  public petsData: Readonly<Pet[]>;
  public usersData: Readonly<User[]>;

  constructor(
    private petsDataService: PetsDataService,
    private usersDataService: UsersDataService,
  ) {}

  ngOnInit(): void {
    console.log('feed');
    if (this.isActive) {
      this.loadData();
    }
  }

  doRefresh(event: CustomEvent): void {
    this.loadData(event);
  }

  loadData(event?: CustomEvent): void {
    this.isLoadingPetsData = true;
    this.petsDataService.fetchAll().subscribe(response => {
      this.petsData = response;
      this.isLoadingPetsData = false;
      console.log(`feed -> onInit -> petsData = ${this.petsData}`);
    });

    this.isLoadingUsersData = true;
    this.usersDataService.fetchAll().subscribe(response => {
      this.usersData = response;
      this.isLoadingUsersData = false;
      if (event) {
        (event.target as HTMLIonRefresherElement).complete();
      }
      console.log(`feed -> onInit -> usersData = ${this.usersData} `);
    });
  }
}
