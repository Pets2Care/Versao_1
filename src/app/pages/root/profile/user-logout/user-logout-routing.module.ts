import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserLogoutPage } from './user-logout.page';

const routes: Routes = [
  {
    path: '',
    component: UserLogoutPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserLogoutPageRoutingModule {}
