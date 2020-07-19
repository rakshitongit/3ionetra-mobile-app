import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SingleSevaMetaData } from 'src/app/components/add-sevas/add-sevas.component';
import { SevaBookingService } from 'src/app/services/seva-booking.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { ProgressUtils } from 'src/app/utils/progress-utils';

@Component({
    selector: 'app-payment-mode',
    templateUrl: './payment-mode.page.html',
    styleUrls: ['./payment-mode.page.scss'],
})
export class PaymentModePage implements OnInit {

    public allSevas: SingleSevaMetaData[] = []

    public isButtonDisabled: boolean = true

    public sevaType: string

    constructor(private bookingService: SevaBookingService,
        private loadingCtrl: LoadingController,
        private toastCtrl: ToastController,
        private router: Router,
        private route: ActivatedRoute) { }

    async ngOnInit() {
        this.sevaType = this.route.snapshot.paramMap.get("sevaType")
        this.allSevas = this.bookingService.getAllAddedSevas()
    }

    public checkPaymentModesEntered(event: boolean) {
        this.isButtonDisabled = !event
    }

    public async submitSevas() {
        const loading = await ProgressUtils.loadingAfterSubmitButton(this.loadingCtrl, "Please wait...", 2000)
        loading.present()
        await loading.onDidDismiss()
        const toast = await ProgressUtils.displayToast(this.toastCtrl, "Booked Seva Successfully, for more details fo to History page", 2000, ()=> {
            this.router.navigate(['/booking-history'])
        })
        toast.present()
        await toast.onDidDismiss()
        this.router.navigate(['/booking-history'])
    }

}
