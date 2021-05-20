import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PetCardComponent } from 'src/app/shared/components/pet-card/pet-card.component';

import { CustomFeedComponent } from './custom-feed/custom-feed.component';
import { FeedComponent } from './feed/feed.component';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  declarations: [
    HomePage,
    FeedComponent,
    CustomFeedComponent,
    PetCardComponent,
  ], //TODO: tirar esse petcardcomponent e colocar como import do sharedmodule
})
export class HomePageModule {}
