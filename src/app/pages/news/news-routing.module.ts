import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsPage } from './news.page';
import { LoginGuard } from 'src/app/activation/login-guard.service';
import { NewsDetailsPage } from './news-details/news-details.component';

const routes: Routes = [
    {
        path: '',
        component: NewsPage,
        canActivate: [LoginGuard]
    },

    {
        path: ':id',
        component: NewsDetailsPage,
        canActivate: [LoginGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class NewsPageRoutingModule { }
