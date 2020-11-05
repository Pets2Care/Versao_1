import type { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PetsDataService } from '../../services/PetsDataService';
import { UserDataService } from '../../services/UserDataService';
import { UsersDataService } from '../../services/UsersDataService';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  constructor(
    private userDataService: UserDataService,
    private usersDataService: UsersDataService,
    private petsDataService: PetsDataService,
    private router: Router,
  ) {}

  ngOnInit() {}

  //TODO: mostrar primeiro um modal de alerta confirmando a ação e depois esse modal joga pra home
  userLogout(): void {
    this.userDataService.clear();
    this.router.navigate(['/auth']);
  }

  //TODO: mostrar primeiro um modal de alerta confirmando a ação e depois esse modal joga pra home
  userDelete(): void {
    this.usersDataService.delete(this.userDataService.get());
    this.petsDataService.deleteByUserId(this.userDataService.get().id);
    this.router.navigate(['/auth']);
  }
}
