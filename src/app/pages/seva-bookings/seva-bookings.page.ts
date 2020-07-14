import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController, ToastController } from '@ionic/angular';
import { AddSevasComponent } from './add-sevas/add-sevas.component';
import { ProgressUtils } from 'src/app/utils/progress-utils';

@Component({
    selector: 'app-seva-bookings',
    templateUrl: './seva-bookings.page.html',
    styleUrls: ['./seva-bookings.page.scss'],
})
export class SevaBookingsPage implements OnInit {

    constructor(private modalController: ModalController) { }

    ngOnInit() {
    }

    async presentModal() {
        const modal = await this.modalController.create({
            component: AddSevasComponent,
            cssClass: 'my-custom-class'
        })
        return await modal.present()
    }

    async termsAndConditionsModal() {
        const modal = await this.modalController.create({
            component: TermsAndConditions,
            cssClass: 'my-custom-class'
        })
        return await modal.present()
    }

}

@Component({
    selector: 'app-terms-and-condition',
    templateUrl: './terms-and-condition.html'
})
export class TermsAndConditions implements OnInit {
    
    constructor(private modalController: ModalController, 
        private loadingController: LoadingController,
        private toastCtrl: ToastController) { }

    ngOnInit(): void {
    }

    dismissModal() {
        this.modalController.dismiss()
    }

    async submitSeva() {
        const loading = await ProgressUtils.loadingAfterSubmitButton(this.loadingController)
        await loading.present()
        await loading.onDidDismiss()
        const toast = await ProgressUtils.displayToast(this.toastCtrl, "Redirecting to payment page")
        toast.present()
        this.dismissModal()
    }
}