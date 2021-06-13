import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { UserLogoutPageRoutingModule } from './user-logout-routing.module';
import { UserLogoutPage } from './user-logout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserLogoutPageRoutingModule,
  ],
  declarations: [UserLogoutPage],
})
export class UserLogoutPageModule {}
