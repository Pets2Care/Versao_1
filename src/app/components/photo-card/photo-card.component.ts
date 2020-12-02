import { Component, Input, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { UserDataService } from '../../services/UserDataService';
import { UsersDataService } from '../../services/UsersDataService';
@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.scss'],
})
export class PhotoCardComponent implements OnInit {
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
<<<<<<< HEAD
      message:
        'Para combinar os detalhes da adoção com o tutor temporário, por favor entre em contato através do e-mail: ' +
        contact,
      buttons: ['OK'],
=======
      message: 'Para combinar os detalhes da adoção com o tutor temporário, entre em contato através do e-mail: <strong>'  + contact + '</strong>',
      buttons: ['OK']
>>>>>>> d41bfcbedbff5b7f377d613d1cd4a2b75d486f47
    });

    await alert.present();
  }

<<<<<<< HEAD
  async presentAlertDetails(): Promise<any> {
=======
  async presentAlertDetails() {
>>>>>>> d41bfcbedbff5b7f377d613d1cd4a2b75d486f47
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
