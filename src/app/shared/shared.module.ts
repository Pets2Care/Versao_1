import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';

import { PetCardComponent } from './components/pet-card/pet-card.component';

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
    // HeaderComponent,
    // FooterComponent,
    // SpinningLoaderComponent,
    // MainLogoComponent,
    // LoginFormComponent,
    // SidebarComponent,
    //SelectAccountPlanComponent
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
    // 	HeaderComponent,
    // 	FooterComponent,
    // 	SpinningLoaderComponent,
    // 	MainLogoComponent,
    // 	LoginFormComponent,
    // 	SidebarComponent,
    // 	SelectAccountPlanComponent
  ],
})
export class SharedModule {}
