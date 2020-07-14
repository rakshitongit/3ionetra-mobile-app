import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SevaBookingsPage } from './seva-bookings.page';

const routes: Routes = [
  {
    path: '',
    component: SevaBookingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SevaBookingsPageRoutingModule {}
