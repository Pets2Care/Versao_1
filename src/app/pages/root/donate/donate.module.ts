import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';

import { DonatePageRoutingModule } from './donate-routing.module';
import { DonatePage } from './donate.page';
import { DonationItemComponent } from './donation-item/donation-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DonatePageRoutingModule,
    SharedModule,
  ],
  declarations: [DonatePage, DonationItemComponent],
})
export class DonatePageModule {}
