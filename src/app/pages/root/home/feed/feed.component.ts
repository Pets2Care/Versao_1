import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Highlight } from 'src/app/shared/models/highlight.model';
import { User } from 'src/app/shared/models/user.model';
import { HighlightsService } from 'src/app/shared/services/highlights.service';
import { PetsDataService } from 'src/app/shared/services/pets.service';
import { UsersDataService } from 'src/app/shared/services/users.service';

import { Pet } from '../../../../shared/models/pet.model';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  @Input() isActive = false;
  public isLoadingPetsData = false;
  public isLoadingUsersData = false;
  public isLoadingHighlights = false;
  public petsData: Readonly<Pet[]>;
  public usersData: Readonly<User[]>;
  public highlightsData: Readonly<Highlight[]>;

  constructor(
    private petsDataService: PetsDataService,
    private usersDataService: UsersDataService,
    private highlightsService: HighlightsService,
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
      // console.log(`feed -> loadData -> petsData = ${this.petsData}`);
    });

    this.isLoadingUsersData = true;
    this.usersDataService.fetchAll().subscribe(response => {
      this.usersData = response;
      this.isLoadingUsersData = false;
      // console.log(`feed -> loadData -> usersData = ${this.usersData} `);
    });

    this.isLoadingHighlights = true;
    this.highlightsService.fetchAll().subscribe(response => {
      this.highlightsData = response;
      this.isLoadingHighlights = false;
      // console.log(
      //   `feed -> loadData -> highlightsData = ${JSON.stringify(
      //     this.highlightsData,
      //   )} `,
      // );
    });

    if (event) {
      (event.target as HTMLIonRefresherElement).complete();
    }
  }
}
