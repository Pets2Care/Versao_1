import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { DonationFormComponent } from '../donation-form/donation-form.component';

import { EditDonationPageRoutingModule } from './edit-donation-routing.module';
import { EditDonationPage } from './edit-donation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditDonationPageRoutingModule,
  ],
  declarations: [EditDonationPage, DonationFormComponent],
})
export class EditDonationPageModule {}
