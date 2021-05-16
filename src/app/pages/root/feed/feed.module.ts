import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { PetCardComponent } from '../../../shared/components/pet-card/pet-card.component';

import { FeedPageRoutingModule } from './feed-routing.module';
import { FeedPage } from './feed.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, FeedPageRoutingModule],
  declarations: [FeedPage, PetCardComponent],
})
export class FeedPageModule {}
