import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { PetRequest } from 'src/app/shared/models/petRequest.model';

import { User } from '../../../../shared/models/user.model';
import { PetsDataService } from '../../../../shared/services/pets.service';
import { UserDataService } from '../../../../shared/services/user.service';

class PetFormData implements PetRequest {
  name: string;
  birthDate: string;
  gender: string;
  type: string;
  breed: string;
  description: string;
  vaccinated: boolean;
  dewormed: boolean;
  castrated: boolean;
  deficit: boolean;
  userId: number;
  cep: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  images: any;
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
    private petsDataService: PetsDataService,
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
    this.petsDataService.create(this.newPet).subscribe(() => {
      this.newPet = new PetFormData();

      //TODO: se desse erro teria que validar, não? Aqui sempre mostra sucesso
      this.presentAlertSuccess();
    });
  }

  //todo: mexer nisso
  isFormComplete(): boolean {
    return !(
      this.newPet?.name?.length > 0 &&
      this.newPet?.cep?.length > 0 &&
      this.newPet?.images &&
      this.newPet?.birthDate &&
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
            this.router.navigate(['/root/tabs/donate/']);
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
            this.router.navigate(['/root/tabs/donate/']);
          },
        },
      ],
    });

    await alert.present();
  }
}
