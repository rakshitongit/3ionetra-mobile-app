import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { ProgressUtils } from 'src/app/utils/progress-utils';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    constructor(private router: Router, 
        private storageService: StorageService, 
        private loadingController: LoadingController,
        private toastCtrl: ToastController) { }

    async ngOnInit() {
        this.storageService.removeToken()
    }

    gotToRegisterPage() {
        this.router.navigateByUrl('/register')
    }

    async loginWithOtp() {
        const loading = await ProgressUtils.loadingAfterSubmitButton(this.loadingController)
        await loading.present()
        await loading.onDidDismiss()
        const toast = await ProgressUtils.displayToast(this.toastCtrl, "LoggedIn successfully")
        toast.present()
        this.router.navigateByUrl('otp-verification')
    }

}
