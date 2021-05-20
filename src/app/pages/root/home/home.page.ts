import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Pet } from '../../../shared/models/pet.model';
import { User } from '../../../shared/models/user.model';
import { PetsDataService } from '../../../shared/services/pets.service';
import { UserDataService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  private subject = new Subject();
  public isLoading = false;
  public petsData: Readonly<Pet[]>;
  public userData: User;
  public selectedSegment = 'featured';

  constructor(
    private petsDataService: PetsDataService,
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
}
