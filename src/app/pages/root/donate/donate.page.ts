import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PetDetailsModalComponent } from 'src/app/shared/components/pet-details-modal/pet-details-modal.component';
import { PetDonationFormComponent } from 'src/app/shared/components/pet-donation-form/pet-donation-form.component';
import { AuthService } from 'src/app/shared/services/auth.service';

import { Pet } from '../../../shared/models/pet.model';
import { User } from '../../../shared/models/user.model';
import { PetsDataService } from '../../../shared/services/pets.service';

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
    private petsDataService: PetsDataService,
    private modalController: ModalController,
  ) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    // this.subject.next();
    // this.subject.complete();
  }

  ionViewWillEnter(): void {
    console.log('donate.page -> ionViewWillEnter');
    this.isLoading = true;
    this.petsDataService.fetchMyPets().subscribe(response => {
      console.log('fetch pet response', response);
      this.isLoading = false;
      this.petsData = response;
    });
  }

  async createNewDonation(): Promise<void> {
    const modal = await this.modalController.create({
      component: PetDonationFormComponent,
    });
    modal.present();
  }
}
