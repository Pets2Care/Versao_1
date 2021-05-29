import type { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/shared/services/auth.service';

import { PetsDataService } from '../../../shared/services/pets.service';
import { UserDataService } from '../../../shared/services/user.service';
import { UsersDataService } from '../../../shared/services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  constructor(
    private authService: AuthService,
    private petsDataService: PetsDataService,
    private alertController: AlertController,
    private router: Router,
  ) {}

  ngOnInit() {}

  async presentAlertLogout() {
    const alert = await this.alertController.create({
      header: 'Atenção!',
      message: 'Deseja realmente sair?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Cancela Operação');
          },
        },
        {
          text: 'Sim',
          handler: () => {
            console.log('Confirma Operação');
            this.authService.logout();
            this.router.navigate(['/login']);
          },
        },
      ],
    });
    await alert.present();
  }

  async presentAlertDelete() {
    const alert = await this.alertController.create({
      header: 'Atenção!',
      message:
        'Essa operação não poderá ser revertida. Deseja realmente excluir a conta?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Cancela Operação');
          },
        },
        {
          text: 'Sim',
          handler: () => {
            this.authService.delete();
            this.router.navigate(['/login']);
          },
        },
      ],
    });
    await alert.present();
  }

  userLogout(): void {
    this.presentAlertLogout();
  }

  userDelete(): void {
    this.presentAlertDelete();
  }
}
