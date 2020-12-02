import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { User } from '../../../interfaces/User';
import { PetsDataServiceNew } from '../../../services/PetsDataServiceNew';
import { UserDataService } from '../../../services/UserDataService';

class PetFormData {
  name: string;
  place: string;
  images: FileList;
  userId: number;
  userName: string;
  age: number;
  type: string;
  description: string;
}

@Component({
  selector: 'app-new-donation',
  templateUrl: './new-donation.page.html',
  styleUrls: ['./new-donation.page.scss'],
})
export class NewDonationPage implements OnInit {
  public newPet = new PetFormData();
  private user: User;

  constructor(
    private alertController: AlertController,
    private router: Router,
    private petsDataService: PetsDataServiceNew,
    private userDataService: UserDataService,
  ) {
    this.loadData();
  }

  ngOnInit(): void {}

  loadData(): void {
    this.user = this.userDataService.get();
  }

  uploadFiles(event: any): void {
    const files = (event.target as HTMLInputElement).files;
    console.log('uploadFiles -> files = ', files);

    this.newPet.images = files;
  }

  postForm(): void {
    this.newPet.userId = this.user.id;
    this.newPet.userName = this.user.name;

    this.petsDataService.create(this.newPet).subscribe(() => {
      this.newPet = new PetFormData();
      this.presentAlertSuccess();
    });
  }

  isFormComplete(): boolean {
    return !(
      this.newPet?.name?.length > 0 &&
      this.newPet?.place?.length > 0 &&
      this.newPet?.images &&
      this.newPet?.age &&
      this.newPet?.type?.length > 0 &&
      this.newPet?.description?.length > 0
    );
  }

  async presentAlertSuccess(): Promise<any> {
    const alert = await this.alertController.create({
      header: 'Doação criada com sucesso!',
      buttons: [
        {
          text: 'Entendi',
          handler: () => {
            console.log('clicou, volta pra lista de doações');
            this.router.navigate(['/home/tabs/donate/']);
          },
        },
      ],
    });

    await alert.present();
  }

  async presentAlertError(): Promise<any> {
    const alert = await this.alertController.create({
      header: 'Houve um erro na criação da doação',
      message: 'Por favor tente novamente mais tarde',
      buttons: [
        {
          text: 'Entendi',
          handler: () => {
            this.router.navigate(['/home/tabs/donate/']);
          },
        },
      ],
    });

    await alert.present();
  }
}
