import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';

import { PetCardComponent } from './components/pet-card/pet-card.component';
import { PetDetailsModalPage } from './components/pet-details-modal/pet-details-modal.page';
import { PetDonationFormComponent } from './components/pet-donation-form/pet-donation-form.component';
import { UserAvatarComponent } from './components/user-avatar/user-avatar.component';
import { UserRegisterFormComponent } from './components/user-register-form/user-register-form.component';

//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//import { FooterComponent } from './components/footer/footer.component';
//import { HeaderComponent } from './components/header/header.component';
//import { LoginFormComponent } from './components/login-form/login-form.component';
//import { MainLogoComponent } from './components/main-logo/main-logo.component';
//import { SelectAccountPlanComponent } from './components/select-account-plan/select-account-plan.component';
//import { SidebarComponent } from './components/sidebar/sidebar.component';
//import { SpinningLoaderComponent } from './components/spinning-loader/spinning-loader.component';

@NgModule({
  declarations: [
    PetCardComponent,
    PetDetailsModalPage,
    PetDonationFormComponent,
    UserRegisterFormComponent,
    UserAvatarComponent,
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
    PetDetailsModalPage,
    PetDonationFormComponent,
    UserRegisterFormComponent,
    UserAvatarComponent,
  ],
})
export class SharedModule {}
