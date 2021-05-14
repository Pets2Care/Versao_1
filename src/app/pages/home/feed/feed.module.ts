import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { PhotoCardComponent } from '../../../shared/components/photo-card/photo-card.component';

import { FeedPageRoutingModule } from './feed-routing.module';
import { FeedPage } from './feed.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, FeedPageRoutingModule],
  declarations: [FeedPage, PhotoCardComponent],
})
export class FeedPageModule {}
