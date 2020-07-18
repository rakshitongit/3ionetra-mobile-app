import { Component, OnInit, Input } from '@angular/core';
import { StorageService, MemberType } from 'src/app/services/storage.service';
import { ProgressUtils } from 'src/app/utils/progress-utils';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';

@Component({
    selector: 'app-member-details',
    templateUrl: './member-details.component.html',
    styleUrls: ['./member-details.component.scss'],
})
export class MemberDetailsComponent implements OnInit {

    memberType: MemberType

    @Input()
    memberDetails: MemberDetailsMetaData

    constructor(private storageService: StorageService,
        private loadingCtrl: LoadingController,
        private toastCtrl: ToastController,
        private alertCtrl: AlertController) { }

    async ngOnInit() {
        this.memberType = await this.storageService.getMemberType()
    }

    async checkForMobileMumber(event: CustomEvent) {
        if (this.memberType === MemberType.DEVOTEE && this.memberDetails.mobile_number.toString().length == 10) {
            // send otp for fetching adderess
            const loader = await ProgressUtils.loadingAfterSubmitButton(this.loadingCtrl, "Checking if the User exists...", 2000)
            loader.present()
            await loader.onDidDismiss()
            const prompt = await this.presentAlertPrompt()
            prompt.present()
            const otpData = await prompt.onDidDismiss()
            console.log("Dismissed message", otpData)
            if (otpData.data && otpData.role === "confirm") {
                console.log(otpData.data.values.otp);
                (await ProgressUtils.displayToast(this.toastCtrl, "Autocompleting the Details of the user")).present()
                this.autoCompleteMember()
            }
        }
    }

    autoCompleteMember() {
        this.memberDetails.first_name = "Jane"
        this.memberDetails.last_name = "Doe"
        this.memberDetails.sevedaar_name = "Jane Doe"
        this.memberDetails.email = "jane@co.in"
        this.memberDetails.country = "IN"
        this.memberDetails.state = "MH"
        this.memberDetails.locality = "Somewhere around the world"
        this.memberDetails.pincode = 346600
        this.memberDetails.city = "Uganda"
        this.memberDetails.address = "Address AddressAddressAddressAddress"
    }

    private presentAlertPrompt() {
        return this.alertCtrl.create({
            cssClass: 'my-custom-class',
            header: 'Confirm Otp',
            subHeader: this.memberDetails.mobile_number.toString(),
            backdropDismiss: false,
            translucent: false,
            inputs: [
                {
                    name: 'otp',
                    type: 'number',
                    placeholder: 'Enter otp'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Confirm',
                    role: 'confirm'
                }
            ]
        })
    }

}

export class MemberDetailsMetaData {
    mobile_number: number
    email: string
    sevedaar_name: string
    first_name: string
    last_name: string
    address: string
    country: string
    state: string
    city: string
    locality: string
    pincode: number
}
