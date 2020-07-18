import { Component, OnInit } from "@angular/core";
import { SingleSevaMetaData } from 'src/app/components/add-sevas/add-sevas.component';
import { StorageService, MemberType } from 'src/app/services/storage.service';
import { ProgressUtils } from 'src/app/utils/progress-utils';
import { LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { SevaBookingService } from 'src/app/services/seva-booking.service';

@Component({
    templateUrl: './add-seva.page.html'
})
export class AddSevaPage implements OnInit {

    public isAgreedToTermsAndConditions: boolean = false

    private locallyAddedSevas: SingleSevaMetaData[] = []

    private memberType: MemberType

    constructor(private storageService: StorageService,
        private loadingCtrl: LoadingController,
        private toastCtrl: ToastController,
        private router: Router,
        private bookingService: SevaBookingService) { }

    async ngOnInit() {
        this.memberType = await this.storageService.getMemberType()
    }

    checkAndEnableButton(isAgreedToTermsAndConditions: boolean) {
        this.isAgreedToTermsAndConditions = isAgreedToTermsAndConditions
    }

    getAddedSevas(sevas: SingleSevaMetaData[]) {
        this.locallyAddedSevas = sevas
    }

    isButtonDisabled(): boolean {
        return !this.isAgreedToTermsAndConditions || this.locallyAddedSevas.length == 0
    }

    public async redirectToPaymentPage() {
        this.bookingService.updateAllSevas(this.locallyAddedSevas)
        if (this.memberType === MemberType.DEVOTEE) {
            // Send SMS and email of the payment gateway
            const loader = await ProgressUtils.loadingAfterSubmitButton(this.loadingCtrl, "Attempting to send SMS/Email with payment details", 2000)
            loader.present()
            await loader.onDidDismiss()
            const toast = await ProgressUtils.displayToast(this.toastCtrl, "Successfully sent SMS/Email")
            toast.present()
            await toast.onDidDismiss()
            this.router.navigate(['/booking-history'])
        } else {
            this.router.navigate(['/seva-bookings/payment-mode'])
        }
    }

    public async bookOnline() {
        this.bookingService.updateAllSevas(this.locallyAddedSevas)
        // Send SMS and email of the payment gateway
        const loader = await ProgressUtils.loadingAfterSubmitButton(this.loadingCtrl, "Attempting to send SMS/Email with payment details", 2000)
        loader.present()
        await loader.onDidDismiss()
        const toast = await ProgressUtils.displayToast(this.toastCtrl, "Successfully sent SMS/Email")
        toast.present()
        await toast.onDidDismiss()
        this.router.navigate(['/booking-history'])
    }

    public isDevotee(): boolean {
        return this.memberType === MemberType.DEVOTEE
    }
}