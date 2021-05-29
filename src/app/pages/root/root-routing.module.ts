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
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./home/home.module').then(m => m.HomePageModule),
          },
        ],
      },
      {
        path: 'pet-details',
        children: [
          {
            path: ':id',
            loadChildren: () =>
              import('./pet-details/pet-details.module').then(
                m => m.PetDetailsPageModule,
              ),
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
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RootPageRoutingModule {}
