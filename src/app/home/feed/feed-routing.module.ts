import { NgModule } from '@angular/core';
import type { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { FeedPage } from './feed.page';

const routes: Routes = [
  {
    path: '',
    component: FeedPage,
    children: [
      {
        path: 'custom',
        loadChildren: () =>
          import('./custom/custom.module').then(m => m.CustomPageModule),
      },
      {
        path: 'featured',

        loadChildren: () =>
          import('./featured/featured.module').then(m => m.FeaturedPageModule),
      },
      {
        path: '',
        redirectTo: 'featured',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedPageRoutingModule {}
