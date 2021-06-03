import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';
import { HelperService } from '../../services/helper.service';
import { UsersDataService } from '../../services/users.service';
import { UserDetailsModalComponent } from '../user-details-modal/user-details-modal.component';

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss'],
})
export class UserAvatarComponent {
  @Input() public item: User;

  constructor(private modalController: ModalController) {}

  async viewUser(): Promise<void> {
    console.log('viewUser -> this.item.id = ', this.item?.id);
    const modal = await this.modalController.create({
      component: UserDetailsModalComponent,
      componentProps: {
        id: this.item?.id,
      },
    });
    modal.present();
  }
}
