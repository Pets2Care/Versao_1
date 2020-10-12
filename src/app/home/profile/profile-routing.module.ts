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
    path: 'user-data',
    loadChildren: () =>
      import('./user-data/user-data.module').then(m => m.UserDataPageModule),
  },
  {
    path: 'user-password',
    loadChildren: () =>
      import('./user-password/user-password.module').then(
        m => m.UserPasswordPageModule,
      ),
  },
  {
    path: 'user-config',
    loadChildren: () =>
      import('./user-config/user-config.module').then(
        m => m.UserConfigPageModule,
      ),
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
    path: 'legal',
    loadChildren: () =>
      import('./legal/legal.module').then(m => m.LegalPageModule),
  },
  {
    path: 'user-logout',
    loadChildren: () =>
      import('./user-logout/user-logout.module').then(
        m => m.UserLogoutPageModule,
      ),
  },
  {
    path: 'user-delete',
    loadChildren: () => import('./user-delete/user-delete.module').then( m => m.UserDeletePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {}
