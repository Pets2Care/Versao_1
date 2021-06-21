import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HelpPageRoutingModule } from './help-routing.module';
import { HelpPage } from './help.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HelpPageRoutingModule],
  declarations: [HelpPage],
})
export class HelpPageModule {}
