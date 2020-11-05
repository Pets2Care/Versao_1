import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Pet } from '../../interfaces/Pet';
import { User } from '../../interfaces/User';
import { PetsDataService } from '../../services/PetsDataService';
import { UserDataService } from '../../services/UserDataService';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.page.html',
  styleUrls: ['./donate.page.scss'],
})
export class DonatePage implements OnInit {
  public user: User;
  public filteredItems: Readonly<Pet[]>;

  constructor(
    private router: Router,
    private petsDataService: PetsDataService,
    private userDataService: UserDataService,
  ) {
    this.loadData();
  }

  ngOnInit(): void {}

  ionViewWillEnter(): void {
    this.loadData();
  }

  loadData(): void {
    this.user = this.userDataService.get();
    console.log('DonatePage -> this.user = ', this.user);
    this.filteredItems = this.petsDataService.getByUserId(this.user.id);
    console.log('DonatePage -> this.filteredItems = ', this.filteredItems);
  }

  createNewDonation(): void {
    this.router.navigate(['/home/tabs/donate/new-donation/']);
  }
}
