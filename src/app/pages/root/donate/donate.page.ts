import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/services/auth.service';

import { Pet } from '../../../shared/models/pet.model';
import { User } from '../../../shared/models/user.model';
import { PetsDataService } from '../../../shared/services/pets.service';
import { UserDataService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.page.html',
  styleUrls: ['./donate.page.scss'],
})
export class DonatePage implements OnInit, OnDestroy {
  //private subject = new Subject();
  public isLoading = false;
  public userData: User;
  public petsData: Pet[];

  constructor(
    private router: Router,
    private petsDataService: PetsDataService,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    // this.subject.next();
    // this.subject.complete();
  }

  //Preciso desse? Ele acaba dando um novo fetch toda vez que entra nessa tela
  ionViewWillEnter(): void {
    console.log('donate.page -> ionViewWillEnter');
    this.isLoading = true;
    this.petsDataService
      .fetchByUserId(this.authService.getUser().id)
      .subscribe(response => {
        console.log('fetch pet response', response);
        this.isLoading = false;
        this.petsData = response;
      });
  }

  createNewDonation(): void {
    this.router.navigate(['/root/tabs/donate/new-donation/']);
  }
}
