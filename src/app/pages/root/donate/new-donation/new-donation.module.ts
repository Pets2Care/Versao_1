import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { DonationFormComponent } from '../donation-form/donation-form.component';

import { NewDonationPageRoutingModule } from './new-donation-routing.module';
import { NewDonationPage } from './new-donation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewDonationPageRoutingModule,
  ],
  declarations: [NewDonationPage, DonationFormComponent],
})
export class NewDonationPageModule {}
