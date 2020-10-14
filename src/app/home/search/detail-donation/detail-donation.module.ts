import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailDonationPageRoutingModule } from './detail-donation-routing.module';

import { DetailDonationPage } from './detail-donation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailDonationPageRoutingModule
  ],
  declarations: [DetailDonationPage]
})
export class DetailDonationPageModule {}
