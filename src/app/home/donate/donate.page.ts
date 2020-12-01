import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';
import { User } from 'src/app/interfaces/User';

import { Pet } from '../../interfaces/Pet';
import { PetsDataServiceNew } from '../../services/PetsDataServiceNew';
import { UserDataService } from '../../services/UserDataService';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.page.html',
  styleUrls: ['./donate.page.scss'],
})
export class DonatePage implements OnInit, OnDestroy {
  private subject = new Subject();
  public isLoading = false;
  public userData: User;
  public filteredPetData: Observable<Pet[]>;

  constructor(
    private router: Router,
    private petsDataService: PetsDataServiceNew,
    private userDataService: UserDataService,
  ) {}

  ngOnInit(): void {
    this.userData = this.userDataService.get();
    console.log('cucucucucu');

    this.filteredPetData = this.petsDataService.get().pipe(
      map(data => {
        console.log('data = ', data);
        return data.filter(i => i.userId === this.userData.id);
      }),
    );
    // .subscribe(data => {
    //   this.filteredPetData = data.filter(i => i.userId === this.userData.id);
    // });
  }

  ngOnDestroy(): void {
    this.subject.next();
    this.subject.complete();
  }

  //Preciso desse? Ele acaba dando um novo fetch toda vez que entra nessa tela
  ionViewWillEnter(): void {
    console.log('donate.page -> ionViewWillEnter');
    this.userData = this.userDataService.get();
    this.isLoading = true;
    this.petsDataService.fetch().subscribe(() => {
      this.isLoading = false;
    });
  }

  createNewDonation(): void {
    this.router.navigate(['/home/tabs/donate/new-donation/']);
  }
}
