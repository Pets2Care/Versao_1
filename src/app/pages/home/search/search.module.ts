import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { PetCardComponent } from '../../../shared/components/pet-card/pet-card.component';

import { SearchPageRoutingModule } from './search-routing.module';
import { SearchPage } from './search.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, SearchPageRoutingModule],
  declarations: [SearchPage, PetCardComponent],
})
export class SearchPageModule {}
