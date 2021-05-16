import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { DonatePageRoutingModule } from './donate-routing.module';
import { DonatePage } from './donate.page';
import { PetCardDonationPageComponent } from './pet-card-donation-page/pet-card-donation-page.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, DonatePageRoutingModule],
  declarations: [DonatePage, PetCardDonationPageComponent],
})
export class DonatePageModule {}
