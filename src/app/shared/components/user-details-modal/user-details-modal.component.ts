import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

import { Pet } from '../../models/pet.model';
import { User } from '../../models/user.model';
import { HelperService } from '../../services/helper.service';
import { PetsDataService } from '../../services/pets.service';
import { UsersDataService } from '../../services/users.service';

@Component({
  selector: 'app-user-details-modal',
  templateUrl: './user-details-modal.component.html',
  styleUrls: ['./user-details-modal.component.scss'],
})
export class UserDetailsModalComponent implements OnInit {
  isLoadingUser = false;
  user: User = null;
  isLoadingPets = false;
  pets: Pet[] = null;
  helperService: HelperService;

  constructor(
    private navParams: NavParams,
    private modalController: ModalController,
    private usersDataService: UsersDataService,
    private petsDataService: PetsDataService,

    helperService: HelperService,
  ) {
    this.helperService = helperService;
  }

  ngOnInit(): void {
    const passedId = this.navParams.get('id');

    if (passedId) {
      this.isLoadingUser = true;

      this.usersDataService.fetchById(passedId).subscribe(result => {
        this.user = result;
        this.isLoadingUser = false;
      });

      this.isLoadingPets = true;

      this.petsDataService.fetchByUserId(passedId).subscribe(result => {
        this.pets = result;
        this.isLoadingPets = false;
      });
    }
  }

  closeModal(): void {
    this.modalController.dismiss();
  }
}
