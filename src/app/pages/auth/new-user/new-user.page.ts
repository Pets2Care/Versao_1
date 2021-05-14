import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { User } from '../../../interfaces/User';
import { UserDataService } from '../../../services/UserDataService';
import { UsersDataService } from '../../../services/UsersDataService';

class Usuario {
  id: number;
  name: string;
  email: string;
  password: string;
  pets: [];
}
@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.page.html',
  styleUrls: ['./new-user.page.scss'],
})
export class NewUserPage implements OnInit {
  public user: User;
  private newUser: number;
  public confirmPassword: string;

  constructor(
    private usersDataService: UsersDataService,
    private userDataService: UserDataService,
    private alertController: AlertController,
    private router: Router,
  ) {
    this.loadData();
  }

  ngOnInit() {}

  loadData() {
    this.user = { id: 0, email: '', name: '', password: '', pets: [] };
  }

  loginUser(userId: number): void {
    const user = this.usersDataService.getById(userId);
    this.userDataService.set(user);
    this.router.navigate(['/home']);
  }

  isFormComplete(): boolean {
    return !(
      this.user?.name?.length > 0 &&
      this.user?.email?.length > 0 &&
      this.user?.password &&
      this.confirmPassword
    );
  }

  postForm(): void {
    if (this.verifyPassword()) {
      this.newUser = this.usersDataService.create(this.user);
      if (this.newUser) {
        this.loginUser(this.newUser);
      }
    }
  }

  verifyPassword(): boolean {
    if (this.user.password === this.confirmPassword) {
      return true;
    } else {
      this.presentAlertErrorPassword();
      return false;
    }
  }

  async presentAlertErrorPassword() {
    const alert = await this.alertController.create({
      header: 'Atenção!',
      message: 'Senhas não coincidem!',
      buttons: ['OK'],
    });
    await alert.present();
  }
}
