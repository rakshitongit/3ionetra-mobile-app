import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingHistoryPageRoutingModule } from './booking-history-routing.module';

import { BookingHistoryPage } from './booking-history.page';
import { BookingHistoryComponent } from 'src/app/components/booking-history/booking-history.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        BookingHistoryPageRoutingModule
    ],
    declarations: [BookingHistoryPage, BookingHistoryComponent]
})
export class BookingHistoryPageModule { }
