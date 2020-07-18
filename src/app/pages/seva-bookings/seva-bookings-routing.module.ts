import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SevaBookingsPage } from './seva-bookings.page';
import { AddSevaPage } from './add-seva/add-seva.page';
import { PaymentModePage } from './payment-mode/payment-mode.page';
import { PaymentModeGuard } from 'src/app/activation/paymentmode-guard.service';

const routes: Routes = [
    {
        path: '',
        component: SevaBookingsPage
    },
    {
        path: 'add-sevas',
        component: AddSevaPage,
        canActivate: [PaymentModeGuard]
    },
    {
        path: 'payment-mode',
        component: PaymentModePage,
        canActivate: [PaymentModeGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SevaBookingsPageRoutingModule { }
