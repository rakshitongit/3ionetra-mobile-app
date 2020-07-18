import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SevaBookingsPageRoutingModule } from './seva-bookings-routing.module';

import { SevaBookingsPage, TermsAndConditions } from './seva-bookings.page';
import { AddSevasComponent } from '../../components/add-sevas/add-sevas.component';
import { MemberDetailsComponent } from 'src/app/components/member-details/member-details.component';
import { AddSevaPage } from './add-seva/add-seva.page';
import { SearchMembersComponent } from 'src/app/components/search-members/search-members.component';
import { PaymentModePage } from './payment-mode/payment-mode.page';
import { SelectPaymentModeForSevasComponent } from 'src/app/components/select-payment-mode-for-sevas/select-payment-mode-for-sevas.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SevaBookingsPageRoutingModule
    ],
    declarations: [SevaBookingsPage, AddSevasComponent, TermsAndConditions, MemberDetailsComponent, AddSevaPage, SearchMembersComponent, PaymentModePage, SelectPaymentModeForSevasComponent]
})
export class SevaBookingsPageModule { }
