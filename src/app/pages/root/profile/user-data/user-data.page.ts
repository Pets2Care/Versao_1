import type { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.page.html',
  styleUrls: ['./user-data.page.scss'],
})
export class UserDataPage implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  getUser(): number {
    return this.authService.getUser().id;
  }
}
