import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  constructor(
    private authService: AuthService,
    private alertController: AlertController,
    private router: Router,
  ) {}

  async presentModalUserEdit(): Promise<void> {
    console.log('presentModalUserEdit');
    //this.authService.getUser().id;
    //TODO
  }

  async presentAlertLogout(): Promise<void> {
    console.log('presentAlertLogout');
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

  async presentAlertDelete(): Promise<void> {
    console.log('presentAlertDelete');
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
}
