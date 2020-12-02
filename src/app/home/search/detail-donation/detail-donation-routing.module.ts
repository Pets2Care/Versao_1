import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailDonationPage } from './detail-donation.page';

const routes: Routes = [
  {
    path: '',
    component: DetailDonationPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailDonationPageRoutingModule {}
