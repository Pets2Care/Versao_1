import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonatePage } from './donate.page';

const routes: Routes = [
  {
    path: '',
    component: DonatePage,
  },
  {
    path: 'new-donation',
    loadChildren: () =>
      import('./new-donation/new-donation.module').then(
        m => m.NewDonationPageModule,
      ),
  },
  {
    path: 'edit-donation',
    loadChildren: () =>
      import('./edit-donation/edit-donation.module').then(
        m => m.EditDonationPageModule,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonatePageRoutingModule {}
