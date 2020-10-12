import { NgModule } from '@angular/core';
import type { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'feed',
        loadChildren: () =>
          import('./feed/feed.module').then(m => m.FeedPageModule),
      },
      {
        path: 'search',
        loadChildren: () =>
          import('./search/search.module').then(m => m.SearchPageModule),
      },
      {
        path: 'donate',
        loadChildren: () =>
          import('./donate/donate.module').then(m => m.DonatePageModule),
      },
      {
        path: 'messages',
        loadChildren: () =>
          import('./messages/messages.module').then(m => m.MessagesPageModule),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./profile/profile.module').then(m => m.ProfilePageModule),
      },
      {
        path: '',
        redirectTo: 'feed',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
