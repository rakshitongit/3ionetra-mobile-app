import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { ProgressUtils } from 'src/app/utils/progress-utils';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
    selector: 'app-otp-verification',
    templateUrl: './otp-verification.page.html',
    styleUrls: ['./otp-verification.page.scss'],
})
export class OtpVerificationPage implements OnInit {

    constructor(private router: Router, 
        private storage: StorageService, 
        private loadingController: LoadingController, 
        private toastCtrl: ToastController) { }

    ngOnInit() {
    }

    async validateOtp() {
        const loading = await ProgressUtils.loadingAfterSubmitButton(this.loadingController)
        await loading.present()
        await loading.onDidDismiss()
        const toast = await ProgressUtils.displayToast(this.toastCtrl, "Successfully verified OTP")
        await toast.present()
        await this.storage.setToken('token')
        this.router.navigateByUrl('news')
    }

}
