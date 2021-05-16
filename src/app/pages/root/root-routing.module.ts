import { NgModule } from '@angular/core';
import type { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { RootPage } from './root.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: RootPage,
    children: [
      {
        path: 'feed',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./feed/feed.module').then(m => m.FeedPageModule),
          },
        ],
      },
      {
        path: 'search',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./search/search.module').then(m => m.SearchPageModule),
          },
          {
            path: ':petId',
            loadChildren: () =>
              import('./search/detail-donation/detail-donation.module').then(
                m => m.DetailDonationPageModule,
              ),
          },
        ],
      },
      {
        path: 'donate',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./donate/donate.module').then(m => m.DonatePageModule),
          },
        ],
      },
      {
        path: 'messages',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./messages/messages.module').then(
                m => m.MessagesPageModule,
              ),
          },
        ],
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./profile/profile.module').then(m => m.ProfilePageModule),
          },
        ],
      },
    ],
  },
  {
    path: '',
    redirectTo: '/root/tabs/feed',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RootPageRoutingModule {}
