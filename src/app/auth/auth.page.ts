import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../interfaces/User';
import { UserDataService } from '../services/UserDataService';
import { UsersDataService } from '../services/UsersDataService';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  users: Readonly<User[]>;

  constructor(
    private usersDataService: UsersDataService,
    private userDataService: UserDataService,
    private router: Router,
  ) {
    this.loadData();
  }

  ngOnInit() {}

  loadData() {
    this.users = this.usersDataService.getAll();
  }

  loginUser(userId: number): void {
    const user = this.usersDataService.getById(userId);
    this.userDataService.set(user);
    this.router.navigate(['/home']);
  }
}
