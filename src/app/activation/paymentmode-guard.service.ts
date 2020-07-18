import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Injectable()
export class PaymentModeGuard implements CanActivate {

    constructor(
        private router: Router,
        private storageService: StorageService,
    ) { }

    async canActivate(): Promise<boolean> {
        try {
            let visitedHistory = await this.storageService.getBookingHistory()
            console.log(visitedHistory)
            if (visitedHistory !== null && visitedHistory) {
                this.router.navigate(['/booking-history'])
                return false
            } else {
                return true
            }
        } catch (e) {
            console.error(e);
        }
        return false;
    }
}
