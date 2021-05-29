import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonatePage } from './donate.page';

const routes: Routes = [
  {
    path: 'new-donation',
    loadChildren: () =>
      import('./new-donation/new-donation.module').then(
        m => m.NewDonationPageModule,
      ),
  },
  {
    path: 'edit-donation',
    children: [
      {
        path: ':id',
        loadChildren: () =>
          import('./edit-donation/edit-donation.module').then(
            m => m.EditDonationPageModule,
          ),
      },
    ],
  },
  {
    path: '',
    component: DonatePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonatePageRoutingModule {}
