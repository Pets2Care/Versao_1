import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UsersDataService } from 'src/app/shared/services/users.service';

import { Pet } from '../../../shared/models/pet.model';
import { User } from '../../../shared/models/user.model';
import { PetsDataService } from '../../../shared/services/pets.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  private subject = new Subject();
  public isLoading = false;
  public petsData: Readonly<Pet[]>;
  public usersData: Readonly<User[]>;
  public selectedSegment = 'featured';

  constructor(
    private petsDataService: PetsDataService,
    private usersDataService: UsersDataService,
  ) {}

  ngOnInit(): void {
    this.petsDataService
      .get()
      .pipe(takeUntil(this.subject))
      .subscribe(data => {
        this.petsData = data;
      });

    this.usersDataService
      .get()
      .pipe(takeUntil(this.subject))
      .subscribe(data => {
        this.usersData = data;
      });
  }

  ngOnDestroy(): void {
    this.subject.next();
    this.subject.complete();
  }

  //Preciso desse? Ele acaba dando um novo fetch toda vez que entra nessa tela
  ionViewWillEnter(): void {
    this.isLoading = true;
    this.petsDataService.fetchAll().subscribe(() => {
      this.isLoading = false;
    });

    this.usersDataService.fetchAll().subscribe(() => {
      this.isLoading = false;
    });
  }
}
