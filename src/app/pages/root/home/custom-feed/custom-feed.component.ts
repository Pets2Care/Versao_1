import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Pet } from 'src/app/shared/models/pet.model';
import { User } from 'src/app/shared/models/user.model';
import { PetsDataService } from 'src/app/shared/services/pets.service';
import { UsersDataService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-custom-feed',
  templateUrl: './custom-feed.component.html',
  styleUrls: ['./custom-feed.component.scss'],
})
export class CustomFeedComponent implements OnInit {
  @Input() isActive = false;
  private subject = new Subject();
  public isLoading = false;
  public userData: Readonly<User>;

  constructor(private usersDataService: UsersDataService) {}

  ngOnInit(): void {
    console.log('custom feed tab');
    if (this.isActive) {
      console.log('feed -> ionViewWillEnter');
      this.isLoading = true;

      this.usersDataService.fetchSelf().subscribe(response => {
        this.userData = response;
        this.isLoading = false;
        console.log(`feed -> onInit -> usersData = ${this.userData} `);
      });
    }
  }
}
