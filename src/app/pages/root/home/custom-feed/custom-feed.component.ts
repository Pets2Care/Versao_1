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
  private subject = new Subject();
  public isLoading = false;
  public userData: Readonly<User>;

  constructor(private usersDataService: UsersDataService) {}

  ngOnInit(): void {
    this.usersDataService
      .get()
      .pipe(takeUntil(this.subject))
      .subscribe(data => {
        this.userData = data[0];
      });
  }

  ngOnDestroy(): void {
    this.subject.next();
    this.subject.complete();
  }

  //Preciso desse? Ele acaba dando um novo fetch toda vez que entra nessa tela
  ionViewWillEnter(): void {
    this.usersDataService.fetchSelf().subscribe(() => {
      this.isLoading = false;
    });
  }
}
