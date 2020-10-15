import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

const defaultPet = {
  createdAt: '',
  name: '',
  place: '',
  url: '',
  userId: undefined,
  userName: '',
  age: undefined,
  type: '',
  description: '',
};

@Component({
  selector: 'app-new-donation',
  templateUrl: './new-donation.page.html',
  styleUrls: ['./new-donation.page.scss'],
})
export class NewDonationPage implements OnInit {
  public newPet = { ...defaultPet };
  public postedPet = null;
  private userId: number;
  private userName: string;

  constructor(
    private alertController: AlertController,
    private activatedRoute: ActivatedRoute,
  ) {
    this.userId = parseInt(this.activatedRoute.snapshot.paramMap.get('userId'));
    this.userName = this.activatedRoute.snapshot.paramMap.get('userName');
    console.log('userId = ', this.userId);
    console.log('userName = ', this.userName);
  }

  ngOnInit() {}

  postForm() {
    this.newPet.createdAt = new Date().toLocaleDateString();
    this.newPet.userId = this.userId;
    this.newPet.userName = this.userName;
    this.newPet.createdAt = new Date().toLocaleDateString();

    this.postedPet = this.newPet;
    this.newPet = { ...defaultPet };
    this.presentAlert();
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

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Doação criada com sucesso!',
      subHeader: 'Dados enviados ao servidor:',
      message:
        '<div>' +
        '<p>Nome:' +
        this.postedPet.name +
        '</p>' +
        '<p>Localização:' +
        this.postedPet.name +
        '</p>' +
        '<p>Imagem:' +
        this.postedPet.url +
        '</p>' +
        '<p>Idade:' +
        this.postedPet.age +
        '</p>' +
        '<p>Espécie:' +
        this.postedPet.type +
        '</p>' +
        '<p>Descrição:' +
        this.postedPet.description +
        '</p>' +
        '<p>Criado em:' +
        this.postedPet.createdAt +
        '</p>' +
        '</div>',
      buttons: ['Entendi'],
    });

    alert.present();
  }
}
