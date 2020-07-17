import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SevaBookingsPage } from './seva-bookings.page';
import { AddSevaPage } from './add-seva/add-seva.page';

const routes: Routes = [
    {
        path: '',
        component: SevaBookingsPage
    },
    {
        path: 'add-sevas',
        component: AddSevaPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SevaBookingsPageRoutingModule { }
