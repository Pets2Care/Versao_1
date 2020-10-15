import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { PhotoCardComponent } from '../../components/photo-card/photo-card.component';

import { DonatePageRoutingModule } from './donate-routing.module';
import { DonatePage } from './donate.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, DonatePageRoutingModule],
  declarations: [DonatePage, PhotoCardComponent],
})
export class DonatePageModule {}
