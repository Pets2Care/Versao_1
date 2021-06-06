import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { RegisterRequest } from 'src/app/shared/models/registerRequest.model';
import { AuthService } from 'src/app/shared/services/auth.service';

import states from '../../utils/states';

@Component({
  selector: 'app-user-register-form',
  templateUrl: './user-register-form.component.html',
  styleUrls: ['./user-register-form.component.scss'],
})
export class UserRegisterFormComponent {
  public states = states;
  isLoading = false;
  uploadedAvatar = null;
  public selectedState = null;

  selectState(value: string): void {
    this.selectedState = this.states.find(obj => obj.sigla == value);
    console.log('selectedState = ', this.selectedState);
  }

  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
  ) {}

  uploadFiles(event: any): void {
    const files = (event.target as HTMLInputElement).files;
    console.log('uploadFiles -> files = ', files);

    this.uploadedAvatar = files;
    console.log('uploadedAvatar = ', this.uploadedAvatar);
  }

  authenticate(request: RegisterRequest, form: NgForm): void {
    this.isLoading = true;
    this.loadingCtrl
      .create({ keyboardClose: true, message: 'Carregando...' })
      .then(loadingEl => {
        loadingEl.present();
        const authObs = this.authService.register(request);

        authObs.subscribe(
          resData => {
            console.log(resData);
            this.isLoading = false;
            form.reset();
            loadingEl.dismiss();
            this.router.navigate(['root']);
          },
          errRes => {
            loadingEl.dismiss();
            console.log('errRes', errRes);
            this.showAlert(
              'Falha na Requisição',
              errRes?.error?.message || 'erro não identificado',
            );
            this.isLoading = false;
          },
        );
      });
  }

  passwordsMatch(form: NgForm): void {
    if (form.value.password !== form.value.confirmPassword) {
      console.log('bla');
      return;
    }
  }

  onSubmit(form: NgForm): void {
    if (!form.valid) {
      return;
    }

    const data: RegisterRequest = {
      email: form?.value?.email,
      password: form?.value?.password,
      name: form?.value?.name,
      gender: form?.value?.gender,
      cep: form?.value?.cep,
      street: form?.value?.street,
      number: form?.value?.number,
      complement: form?.value?.complement,
      neighborhood: form?.value?.neighborhood,
      city: form?.value?.city,
      state: form?.value?.state,
      birthDate: form?.value.birthDate,
      telephone: form?.value?.telephone,
      description: form?.value?.description,
      avatar: this.uploadedAvatar,
      website: form?.value?.websiteUrl,
    };

    console.log('data = ', data);

    this.authenticate(data, form);
  }

  private showAlert(header: string, message: string) {
    this.alertCtrl
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
