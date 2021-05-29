import { NgModule } from '@angular/core';
import type { Routes } from '@angular/router';
import { PreloadAllModules, RouterModule } from '@angular/router';

import { LoggedUserGuard } from './shared/guards/logged-user.guard';
import { UnloggedUserGuard } from './shared/guards/unlogged-user.guard';

const routes: Routes = [
  {
    path: 'root',
    loadChildren: () =>
      import('./pages/root/root.module').then(m => m.RootPageModule),
    canActivate: [LoggedUserGuard],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then(m => m.LoginPageModule),
    canActivate: [UnloggedUserGuard],
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/register/register.module').then(
        m => m.RegisterPageModule,
      ),
    canActivate: [UnloggedUserGuard],
  },
  {
    path: '',
    redirectTo: 'root',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'root',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
