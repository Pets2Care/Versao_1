import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

import { Pet } from '../../models/pet.model';
import { User } from '../../models/user.model';
import { HelperService } from '../../services/helper.service';
import { PetsDataService } from '../../services/pets.service';
import { UsersDataService } from '../../services/users.service';

@Component({
  selector: 'app-pet-details-modal',
  templateUrl: './pet-details-modal.page.html',
  styleUrls: ['./pet-details-modal.page.scss'],
})
export class PetDetailsModalPage implements OnInit {
  selectedPet: Pet = null;
  selectedUser: User = null;
  helperService: HelperService;

  constructor(
    private navParams: NavParams,
    private modalController: ModalController,
    private petsDataService: PetsDataService,
    private usersDataService: UsersDataService,
    helperService: HelperService,
  ) {
    this.helperService = helperService;
  }

  ngOnInit(): void {
    const passedId = this.navParams.get('id');

    if (passedId) {
      console.log('selected Id = ', passedId);
      this.petsDataService.fetchById(passedId).subscribe(result => {
        this.selectedPet = result;
      });

      console.log('selectedPet = ', this.selectedPet);

      this.usersDataService
        .fetchById(this.selectedPet.userId)
        .subscribe(result => {
          this.selectedUser = result;
        });

      console.log('selectedUser = ', this.selectedUser);
    }
  }

  // talvez esse?
  // ionViewWillEnter(): void {
  // }

  closeModal(): void {
    this.modalController.dismiss();
  }
}
