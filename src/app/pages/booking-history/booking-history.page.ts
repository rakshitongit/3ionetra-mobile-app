import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
    templateUrl: './booking-history.page.html',
    styleUrls: ['./booking-history.page.scss'],
})
export class BookingHistoryPage implements OnInit {

    constructor(private strorageService: StorageService) { }

    ngOnInit() {
        this.strorageService.setBookingHistory()
    }

}
