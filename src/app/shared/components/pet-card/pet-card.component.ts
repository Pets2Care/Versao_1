import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { Pet } from '../../models/pet.model';
import { AuthService } from '../../services/auth.service';
import { HelperService } from '../../services/helper.service';
import { PetsDataService } from '../../services/pets.service';
import { PetDetailsModalComponent } from '../pet-details-modal/pet-details-modal.component';
import { PetDonationFormComponent } from '../pet-donation-form/pet-donation-form.component';

@Component({
  selector: 'app-pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.scss'],
})
export class PetCardComponent implements OnInit {
  @Input() public item: Pet;
  @Input() public isDonationPage = false;

  public helperService: HelperService;

  constructor(
    private authService: AuthService,
    private petsDataService: PetsDataService,
    private modalController: ModalController,
    helperService: HelperService,
  ) {
    this.helperService = helperService;
  }

  ngOnInit() {}

  isPetOwner(): boolean {
    //console.log('isPetOwner');
    return this.authService.getUser().id === this.item?.id;
  }

  async viewDonation(): Promise<void> {
    console.log('viewDonation -> this.item.id = ', this.item?.id);
    const modal = await this.modalController.create({
      component: PetDetailsModalComponent,
      componentProps: {
        id: this.item?.id,
      },
    });
    modal.present();
  }

  async editDonation(): Promise<void> {
    console.log('editDonation -> this.item.id = ', this.item?.id);
    const modal = await this.modalController.create({
      component: PetDonationFormComponent,
      componentProps: {
        id: this.item?.id,
      },
    });
    modal.present();
  }

  pauseDonation(): void {
    console.log('pauseDonation -> this.item.id = ', this.item?.id);
    this.petsDataService.pause(this.item.id);
  }

  deleteDonation(): void {
    console.log('deleteDonation -> this.item.id = ', this.item?.id);
    this.petsDataService.delete(this.item.id);
  }
}
