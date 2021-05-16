import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { UserDataService } from '../../services/user.service';
import { UsersDataService } from '../../services/users.service';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
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
    this.router.navigate(['/root']);
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
