import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { Pet } from '../../../interfaces/Pet';
import { User } from '../../../interfaces/User';
import { PetsDataService } from '../../../services/PetsDataService';
import { UserDataService } from '../../../services/UserDataService';

@Component({
  selector: 'app-new-donation',
  templateUrl: './new-donation.page.html',
  styleUrls: ['./new-donation.page.scss'],
})
export class NewDonationPage implements OnInit {
  public defaultPet: Pet = {
    id: undefined,
    createdAt: '',
    name: '',
    place: '',
    url: 'assets/img/default_pet.png',
    userId: undefined,
    userName: '',
    age: undefined,
    type: '',
    description: '',
  };

  public newPet = this.defaultPet;
  public postedPet = null;
  private user: User;

  constructor(
    private alertController: AlertController,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private petsDataService: PetsDataService,
    private userDataService: UserDataService,
  ) {
    this.loadData();
  }

  ngOnInit() {}

  loadData() {
    this.user = this.userDataService.get();
  }

  postForm(): void {
    this.newPet.createdAt = new Date().toLocaleDateString();
    this.newPet.userId = this.user.id;
    this.newPet.userName = this.user.name;
    this.newPet.createdAt = new Date().toLocaleDateString();

    this.postedPet = this.newPet;
    this.newPet = this.defaultPet;
    const newPetId = this.petsDataService.create(this.postedPet);

    if (newPetId >= 0) {
      this.presentAlertSuccess();
    } else {
      this.presentAlertError();
    }
  }

  isFormComplete(): boolean {
    return !(
      this.newPet.name.length > 0 &&
      this.newPet.place &&
      this.newPet.url &&
      this.newPet.age &&
      this.newPet.type &&
      this.newPet.description
    );
  }

  async presentAlertSuccess() {
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

  async presentAlertError() {
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
