import { NgModule } from '@angular/core';
import type { Routes } from '@angular/router';
import { PreloadAllModules, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'root',
    loadChildren: () =>
      import('./pages/root/root.module').then(m => m.RootPageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then(m => m.LoginPageModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/register/register.module').then(
        m => m.RegisterPageModule,
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
