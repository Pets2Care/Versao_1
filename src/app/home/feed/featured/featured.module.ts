import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { PhotoCardComponent } from '../../../components/photo-card/photo-card.component';

import { FeaturedPageRoutingModule } from './featured-routing.module';
import { FeaturedPage } from './featured.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, FeaturedPageRoutingModule],
  declarations: [FeaturedPage, PhotoCardComponent],
})
export class FeaturedPageModule {}
