import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';

import { UserDataPageRoutingModule } from './user-data-routing.module';
import { UserDataPage } from './user-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserDataPageRoutingModule,
    SharedModule,
  ],
  declarations: [UserDataPage],
})
export class UserDataPageModule {}
