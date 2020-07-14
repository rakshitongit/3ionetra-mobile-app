import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SevaDetailsPageRoutingModule } from './seva-details-routing.module';

import { SevaDetailsPage } from './seva-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SevaDetailsPageRoutingModule
  ],
  declarations: [SevaDetailsPage]
})
export class SevaDetailsPageModule {}
