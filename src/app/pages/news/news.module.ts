import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsPageRoutingModule } from './news-routing.module';

import { NewsPage } from './news.page';
import { NewsDetailsPage } from './news-details/news-details.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        NewsPageRoutingModule
    ],
    declarations: [NewsPage, NewsDetailsPage]
})
export class NewsPageModule { }
