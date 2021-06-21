import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { AlertController } from '@ionic/angular';

import { Message } from '../../models/message.model';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';
import { PetsDataService } from '../../services/pets.service';

@Component({
  selector: 'app-user-message-card',
  templateUrl: './user-message-card.component.html',
  styleUrls: ['./user-message-card.component.scss'],
})
export class UserMessageCardComponent implements OnChanges {
  @Input() item: Message;

  constructor(
    private petsDataService: PetsDataService,
    private alertController: AlertController,
    private authService: AuthService,
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes = ', changes);
    this.item = changes.item.currentValue || undefined;
  }

  acceptOffer(): void {
    console.log('acceptOffer');
    this.presentAcceptOffer();
  }

  denyOffer(): void {
    console.log('denyOffer');
    this.presentDenyOffer();
  }

  getOtherUser(): User {
    return this.item?.userId.id !== this.authService.getUser().id
      ? this.item.userId
      : this.item.ownerId;
  }

  getCardTitle(): string {
    return this.item?.userId.id !== this.authService.getUser()?.id
      ? 'Pedido de Adoção Recebido'
      : 'Pedido de Adoção Enviado';
  }

  async presentAcceptOffer(): Promise<void> {
    console.log('presentAcceptOffer');
    const alert = await this.alertController.create({
      header: 'Aceitar Oferta de Adoção',
      message:
        'Ao aceitar, o usuário interessado receberá seus dados de contato completos. Depois disso basta acertar os detalhes!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Cancela Operação');
          },
        },
        {
          text: 'Confirmar',
          handler: () => {
            console.log('Confirma aceitar pedido');
            this.petsDataService
              .acceptOffer(this.item?.advertId?.id, true)
              .subscribe(() => console.log('aceite recebido'));
          },
        },
      ],
    });
    await alert.present();
  }

  async presentDenyOffer(): Promise<void> {
    console.log('presentDenyOffer');
    const alert = await this.alertController.create({
      header: 'Recusar Oferta de Adoção',
      message:
        'Se por algum motivo você acha que o candidato não é adequado, basta recusar que ele será notificado pelo sistema.',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Cancela Operação');
          },
        },
        {
          text: 'Confirmar',
          handler: () => {
            console.log('Confirma negar pedido');
            this.petsDataService
              .acceptOffer(this.item?.advertId?.id, false)
              .subscribe(() => console.log('negativo recebido'));
          },
        },
      ],
    });
    await alert.present();
  }
}
