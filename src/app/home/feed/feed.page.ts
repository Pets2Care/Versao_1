import { Platform } from '@ionic/angular';
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
  public result: Readonly<Pet[]>;

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
    console.log('USUARIO' + this.currentUser);
    this.result = this.petsData;
  }

filterArray(ev:any)
{
  this.result = this.petsData;
  const val = ev.target.value;
  if (val && val.trim() !== '')
  {
    this.result = this.result.filter((item) => {
    return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
            item.place.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
            item.userName.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
            item.age.toString().indexOf(val.toLowerCase()) > -1 ||
            item.description.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
            item.createdAt.toLowerCase().indexOf(val.toLowerCase()) > -1 );
    });
  }
  else{
    return this.petsData;
  }
}

}
