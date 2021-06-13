import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

import { Pet } from '../../models/pet.model';
import { AuthService } from '../../services/auth.service';
import { HelperService } from '../../services/helper.service';
import { PetsDataService } from '../../services/pets.service';
import { PetDetailsModalComponent } from '../pet-details-modal/pet-details-modal.component';
import { PetDonationFormComponent } from '../pet-donation-form/pet-donation-form.component';

@Component({
  selector: 'app-pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.scss'],
})
export class PetCardComponent {
  @Input() public item: Pet;
  @Input() public isDonationPage = false;

  public helperService: HelperService;

  constructor(
    private authService: AuthService,
    private petsDataService: PetsDataService,
    private modalController: ModalController,
    private alertController: AlertController,
    helperService: HelperService,
  ) {
    this.helperService = helperService;
  }

  isPetOwner(): boolean {
    return this.authService.getUser().id === this.item?.id;
  }

  async viewDonation(): Promise<void> {
    console.log('viewDonation -> this.item.id = ', this.item?.id);
    const modal = await this.modalController.create({
      component: PetDetailsModalComponent,
      componentProps: {
        id: this.item?.id,
      },
    });
    modal.present();
  }

  async editDonation(): Promise<void> {
    console.log('editDonation -> this.item.id = ', this.item?.id);
    const modal = await this.modalController.create({
      component: PetDonationFormComponent,
      componentProps: {
        id: this.item?.id,
      },
    });
    modal.present();
  }

  pauseDonation(): void {
    console.log('pauseDonation');
    this.presentAlertPauseDonation(this.item?.isActive);
  }

  deleteDonation(): void {
    console.log('deleteDonation');
    this.presentAlertDeleteDonation();
  }

  async presentAlertPauseDonation(isActive: boolean): Promise<void> {
    console.log('presentAlertPauseDonation');
    const alert = await this.alertController.create({
      header: isActive ? 'Parar Anúncio' : 'Retomar Anúncio',
      message: isActive
        ? 'Ao pausar um anúncio de adoção ele ficará invisível para outros usuários.'
        : 'Assim que o anúncio for retomado ele ficará visível a todos os usuários.',
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
            console.log('Confirma Operação de pausa ->', isActive);
            const modifiedPet = { ...this.item, isActive: !isActive };
            this.petsDataService.update(modifiedPet);
          },
        },
      ],
    });
    await alert.present();
  }

  async presentAlertDeleteDonation(): Promise<void> {
    console.log('presentAlertDeleteDonation');
    const alert = await this.alertController.create({
      header: 'Apagar Anúncio',
      message:
        'Ao apagar um anúncio ele não existirá mais na plataforma, e todos os seus dados serão perdidos.',
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
            console.log('Confirma Operação de deleção');
            this.petsDataService.delete(this.item.id);
          },
        },
      ],
    });
    await alert.present();
  }
}
