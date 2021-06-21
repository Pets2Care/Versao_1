import { NgModule } from '@angular/core';
import type { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { ProfilePage } from './profile.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage,
  },
  {
    path: 'equipe',
    loadChildren: () =>
      import('../profile/equipe/equipe.module').then(m => m.EquipePageModule),
  },
  {
    path: 'help',
    loadChildren: () =>
      import('./help/help.module').then(m => m.HelpPageModule),
  },
  {
    path: 'privacy',
    loadChildren: () =>
      import('./privacy/privacy.module').then(m => m.PrivacyPageModule),
  },
  {
    path: 'sobre',
    loadChildren: () =>
      import('../profile/sobre/sobre.module').then(m => m.SobrePageModule),
  },
  {
    path: 'user-config',
    loadChildren: () =>
      import('./user-config/user-config.module').then(
        m => m.UserConfigPageModule,
      ),
  },
  {
    path: 'user-data',
    loadChildren: () =>
      import('./user-data/user-data.module').then(m => m.UserDataPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {}
