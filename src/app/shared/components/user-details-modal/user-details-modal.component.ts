import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

import { User } from '../../models/user.model';
import { HelperService } from '../../services/helper.service';
import { UsersDataService } from '../../services/users.service';

@Component({
  selector: 'app-user-details-modal',
  templateUrl: './user-details-modal.component.html',
  styleUrls: ['./user-details-modal.component.scss'],
})
export class UserDetailsModalComponent implements OnInit {
  isLoading = false;
  selectedUser: User = null;
  helperService: HelperService;

  constructor(
    private navParams: NavParams,
    private modalController: ModalController,
    private usersDataService: UsersDataService,
    helperService: HelperService,
  ) {
    this.helperService = helperService;
  }

  ngOnInit(): void {
    const passedId = this.navParams.get('id');
    this.isLoading = true;

    if (passedId) {
      //console.log('selected Id = ', passedId);
      this.usersDataService.fetchById(passedId).subscribe(result => {
        //console.log('result = ', result);
        this.selectedUser = result;
        this.isLoading = false;
        //console.log('selectedUser = ', this.selectedUser);
      });
    }
  }

  closeModal(): void {
    this.modalController.dismiss();
  }
}
