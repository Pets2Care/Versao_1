import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { User } from '../../models/user.model';
import { UserDetailsModalComponent } from '../user-details-modal/user-details-modal.component';

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss'],
})
export class UserAvatarComponent {
  @Input() public user: User;
  @Input() public layout: string;

  constructor(private modalController: ModalController) {}

  async viewUser(): Promise<void> {
    console.log('viewUser -> this.user.id = ', this.user?.id);
    const modal = await this.modalController.create({
      component: UserDetailsModalComponent,
      componentProps: {
        id: this.user?.id,
      },
    });
    modal.present();
  }
}
