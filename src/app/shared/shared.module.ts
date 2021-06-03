import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';

import { PetCardComponent } from './components/pet-card/pet-card.component';
import { PetDetailsModalComponent } from './components/pet-details-modal/pet-details-modal.component';
import { PetDonationFormComponent } from './components/pet-donation-form/pet-donation-form.component';
import { UserAvatarComponent } from './components/user-avatar/user-avatar.component';
import { UserDetailsModalComponent } from './components/user-details-modal/user-details-modal.component';
import { UserRegisterFormComponent } from './components/user-register-form/user-register-form.component';

@NgModule({
  declarations: [
    PetCardComponent,
    PetDetailsModalComponent,
    PetDonationFormComponent,
    UserRegisterFormComponent,
    UserAvatarComponent,
    UserDetailsModalComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
  ],
  exports: [
    PetCardComponent,
    PetDetailsModalComponent,
    PetDonationFormComponent,
    UserRegisterFormComponent,
    UserAvatarComponent,
    UserDetailsModalComponent,
  ],
})
export class SharedModule {}
