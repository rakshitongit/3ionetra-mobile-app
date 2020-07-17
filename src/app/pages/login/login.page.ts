import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { ProgressUtils } from 'src/app/utils/progress-utils';
import { LoginService } from 'src/app/services/login.service';
import { LoginWithMobile } from 'src/app/utils/models';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    loginDetails: LoginWithMobile = new LoginWithMobile()

    constructor(private router: Router,
        private storageService: StorageService,
        private loadingController: LoadingController,
        private toastCtrl: ToastController,
        private loginService: LoginService) { }

    async ngOnInit() {
        this.storageService.removeToken()
    }

    gotToRegisterPage() {
        this.router.navigateByUrl('/register')
    }

    async loginWithOtp() {
        const loading = await ProgressUtils.loadingAfterSubmitButton(this.loadingController)
        try {
            await loading.present()
            // const otp: number = (await this.loginService.loginWithMobile(this.loginDetails).toPromise()).otp
            loading.dismiss()
            await loading.onDidDismiss()
            const toast = (await ProgressUtils.displayToast(this.toastCtrl, "LoggedIn successfully"))
            toast.present()
            this.storageService.setMemberType(this.loginDetails.member_type)
            this.router.navigateByUrl('otp-verification')
        } catch (err) {
            console.error(err)
            await loading.dismiss()
            await (await ProgressUtils.displayToast(this.toastCtrl, "Error logging in")).present()
        }
    }

}
