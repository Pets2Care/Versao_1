import { Component, Input, OnInit } from '@angular/core';
import { UsersDataService } from '../../services/UsersDataService';
import { UserDataService } from '../../services/UserDataService';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.scss'],
})
export class PhotoCardComponent implements OnInit {
  @Input() public item;
  public donationUser;
  public currentUser;
  constructor(private usersDataService: UsersDataService,
              private alertController: AlertController,
              private userDataService: UserDataService)
              {}
  ngOnInit() {}

  async presentAlertDonation(contact: string) {
    const alert = await this.alertController.create({
      header: 'Oba!',
      message: 'Para combinar os detalhes da adoção com o tutor temporário, por favor entre em contato através do e-mail: '  + contact,
      buttons: ['OK']
    });

    await alert.present();
  }
  
  async presentAlertDetails() {
    const alert = await this.alertController.create({
      header: 'Atenção!',
      message: 'Você disponibilizou esse animal para adoção.',
      buttons: ['OK']
    });

    await alert.present();
  }

  selectAnimal(donationUserId: number)
  {
    this.currentUser = this.userDataService.get();
    this.donationUser = this.usersDataService.getById(donationUserId);
    if (this.currentUser.id !== this.donationUser.id){
      this.presentAlertDonation(this.donationUser.email);
    }
    else{
      this.presentAlertDetails();
    }
  }
}
