import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { User } from '../../shared/models/user.model';
import { UserDataService } from '../../shared/services/user.service';
import { UsersDataService } from '../../shared/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  // users: Readonly<User[]>;
  // userName: '';
  // password: any;

  // constructor(
  //   private usersDataService: UsersDataService,
  //   private userDataService: UserDataService,
  //   private alertController: AlertController,
  //   private router: Router,
  // ) {
  //   this.loadData();
  // }

  // ngOnInit() {}

  // loadData() {
  //   this.users = this.usersDataService.getAll();
  // }

  // verifyUser(ev: any) {
  //   const hasUser = this.users.find(e => e.email === this.userName);
  //   if (hasUser) {
  //     if (hasUser.password === this.password) {
  //       this.loginUser(hasUser.id);
  //     }
  //   } else {
  //     this.presentAlertError();
  //   }
  // }

  // async presentAlertError() {
  //   const alert = await this.alertController.create({
  //     header: 'Atenção!',
  //     message: 'Usuário e/ou Senha incorretos!',
  //     buttons: ['OK'],
  //   });
  //   await alert.present();
  // }

  // loginUser(userId: number): void {
  //   const user = this.usersDataService.getById(userId);
  //   this.userDataService.set(user);
  //   this.router.navigate(['/root']);
  // }

  // createUser(): void {
  //   this.router.navigate(['/register']);
  // }
}
