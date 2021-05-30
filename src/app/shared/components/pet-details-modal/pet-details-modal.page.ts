import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

import { PetsDataService } from '../../services/pets.service';

@Component({
  selector: 'app-pet-details-modal',
  templateUrl: './pet-details-modal.page.html',
  styleUrls: ['./pet-details-modal.page.scss'],
})
export class PetDetailsModalPage implements OnInit {
  selectedPet = null;

  constructor(
    private navParams: NavParams,
    private modalController: ModalController,
    private petsDataService: PetsDataService,
  ) {}

  ngOnInit(): void {
    const selectedId = this.navParams.get('id');
    console.log('selected Id = ', selectedId);
    this.petsDataService.fetchById(selectedId).subscribe(result => {
      this.selectedPet = result;
    });
  }

  closeModal(): void {
    this.modalController.dismiss();
  }
}
