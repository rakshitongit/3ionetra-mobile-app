import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WaitingForApprovalPageRoutingModule } from './waiting-for-approval-routing.module';

import { WaitingForApprovalPage } from './waiting-for-approval.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WaitingForApprovalPageRoutingModule
  ],
  declarations: [WaitingForApprovalPage]
})
export class WaitingForApprovalPageModule {}
