import { Component, OnInit } from '@angular/core';
import {
  AlertController,
  LoadingController,
  ModalController,
  NavParams,
} from '@ionic/angular';

import { Pet } from '../../models/pet.model';
import { User } from '../../models/user.model';
import { HelperService } from '../../services/helper.service';
import { PetsDataService } from '../../services/pets.service';
import { UsersDataService } from '../../services/users.service';

@Component({
  selector: 'app-pet-details-modal',
  templateUrl: './pet-details-modal.component.html',
  styleUrls: ['./pet-details-modal.component.scss'],
})
export class PetDetailsModalComponent implements OnInit {
  isLoadingPet = false;
  pet: Pet = null;
  isLoadingUser = false;
  user: User = null;
  helperService: HelperService;

  constructor(
    private navParams: NavParams,
    private modalController: ModalController,
    private petsDataService: PetsDataService,
    private usersDataService: UsersDataService,
    private alertController: AlertController,
    private loadingController: LoadingController,
    helperService: HelperService,
  ) {
    this.helperService = helperService;
  }

  ngOnInit(): void {
    const passedId = this.navParams.get('id');

    if (passedId) {
      this.isLoadingPet = true;
      this.isLoadingUser = true;

      this.petsDataService.fetchById(passedId).subscribe(result => {
        this.pet = this.helperService.formatPet(result);
        this.isLoadingPet = false;

        this.usersDataService.fetchById(this.pet.userId).subscribe(result => {
          this.user = this.helperService.formatUser(result);
          this.isLoadingUser = false;
        });
      });
    }
  }

  closeModal(): void {
    this.modalController.dismiss();
  }

  async requestPetInformation(): Promise<void> {
    console.log('usario quer saber mais a respeito do pet');
    //abrir alerta com dois botões: "guardar nos favoritos" e "quero adotar!"
    const alert = await this.alertController.create({
      header: 'Escolha a ação',
      buttons: [
        {
          text: 'Falar com doador',
          handler: () => {
            console.log('Confirm Ok');
            this.loadingController
              .create({ keyboardClose: true, message: 'Carregando...' })
              .then(loadingEl => {
                loadingEl.present();
                const response = this.petsDataService.contactDonor(this.pet.id);
                response.subscribe(
                  resData => {
                    loadingEl.dismiss();
                    console.log('succRes', resData);
                    this.showAlert('Sucesso', resData);
                  },
                  errRes => {
                    loadingEl.dismiss();
                    console.log('errRes', errRes);
                    this.showAlert(
                      'Falha na Requisição',
                      errRes?.error?.message || 'erro não identificado',
                    );
                  },
                );
              });
          },
        },
        {
          text: 'Salvar nos favoritos',
          handler: () => {
            console.log('Confirm favorited');
            this.loadingController
              .create({ keyboardClose: true, message: 'Carregando...' })
              .then(loadingEl => {
                loadingEl.present();
                const response = this.petsDataService.saveFavorite(this.pet.id);
                response.subscribe(
                  resData => {
                    loadingEl.dismiss();
                    console.log('succRes', resData);
                    this.showAlert('Sucesso', resData);
                  },
                  errRes => {
                    loadingEl.dismiss();
                    console.log('errRes', errRes);
                    this.showAlert(
                      'Falha na Requisição',
                      errRes?.error?.message || 'erro não identificado',
                    );
                  },
                );
              });
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          },
        },
      ],
    });

    await alert.present();
  }

  private showAlert(header: string, message: string) {
    this.alertController
      .create({
        header: header,
        message: message,
        buttons: ['Entendi'],
      })
      .then(alertEl => {
        alertEl.present();
      });
  }
}
