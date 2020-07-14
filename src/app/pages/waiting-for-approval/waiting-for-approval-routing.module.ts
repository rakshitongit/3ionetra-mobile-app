import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WaitingForApprovalPage } from './waiting-for-approval.page';

const routes: Routes = [
  {
    path: '',
    component: WaitingForApprovalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WaitingForApprovalPageRoutingModule {}
