import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SevaDetailsPage } from './seva-details.page';

const routes: Routes = [
  {
    path: '',
    component: SevaDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SevaDetailsPageRoutingModule {}
