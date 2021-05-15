import { Component, Input, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { UserDataService } from '../../../services/user.service';
import { UsersDataService } from '../../../services/users.service';
@Component({
  selector: 'app-pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.scss'],
})
export class PetCardComponent implements OnInit {
  @Input() public item;

  constructor(
    private usersDataService: UsersDataService,
    private alertController: AlertController,
    private userDataService: UserDataService,
  ) {}

  ngOnInit() {}

  async presentAlertDonation(contact: string): Promise<any> {
    const alert = await this.alertController.create({
      header: 'Oba!',
      message:
        'Para combinar os detalhes da adoção com o tutor temporário, entre em contato através do e-mail: <strong>' +
        contact +
        '</strong>',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async presentAlertDetails(): Promise<any> {
    const alert = await this.alertController.create({
      header: 'Atenção!',
      message: 'Você disponibilizou esse animal para adoção.',
      buttons: ['OK'],
    });

    await alert.present();
  }

  selectAnimal(donationUserId: number): void {
    const currentUser = this.userDataService.get();
    const donationUser = this.usersDataService.getById(donationUserId);

    if (currentUser.id !== donationUser.id) {
      this.presentAlertDonation(donationUser.email);
    } else {
      this.presentAlertDetails();
    }
  }

  public getFormattedDate(): string {
    return new Date(this.item.createdAt).toLocaleDateString('pt-BR');
  }
}
