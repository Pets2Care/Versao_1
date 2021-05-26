import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { LoginRequest } from 'src/app/shared/models/loginRequest.model';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  isLoading = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
  ) {}

  ngOnInit(): void {}

  authenticate(request: LoginRequest): void {
    this.isLoading = true;
    this.loadingCtrl
      .create({ keyboardClose: true, message: 'Carregando...' })
      .then(loadingEl => {
        loadingEl.present();
        const authObs = this.authService.login(request);

        authObs.subscribe(
          resData => {
            console.log(resData);
            this.isLoading = false;
            loadingEl.dismiss();
            this.router.navigateByUrl('/root/home/feed');
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

  onSubmit(form: NgForm): void {
    if (!form.valid) {
      return;
    }

    const data: LoginRequest = {
      login: form.value.email,
      password: form.value.password,
    };

    console.log('data = ', data);

    this.authenticate(data);
    form.reset();
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
