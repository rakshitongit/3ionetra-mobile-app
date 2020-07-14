import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SevaBookingsPageRoutingModule } from './seva-bookings-routing.module';

import { SevaBookingsPage, TermsAndConditions } from './seva-bookings.page';
import { AddSevasComponent } from './add-sevas/add-sevas.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SevaBookingsPageRoutingModule
    ],
    declarations: [SevaBookingsPage, AddSevasComponent, TermsAndConditions]
})
export class SevaBookingsPageModule { }
