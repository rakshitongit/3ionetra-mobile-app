import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ModalController, LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { MemberType, StorageService } from 'src/app/services/storage.service';
import { SearchMembersComponent } from 'src/app/components/search-members/search-members.component';
import { MemberDetailsMetaData } from 'src/app/components/member-details/member-details.component';

@Component({
    selector: 'app-seva-bookings',
    templateUrl: './seva-bookings.page.html',
    styleUrls: ['./seva-bookings.page.scss'],
})
export class SevaBookingsPage implements OnInit {

    public memberType: MemberType

    public memberDetails: MemberDetailsMetaData = new MemberDetailsMetaData()

    constructor(private modalController: ModalController,
        private router: Router,
        private storageService: StorageService) { }

    async ngOnInit() {
        this.memberType = await this.storageService.getMemberType()
        this.storageService.clearBookingHistory()
        this.memberDetails = new MemberDetailsMetaData()
    }

    isVoluteer(): boolean {
        if (this.memberType) {
            return this.memberType === MemberType.VOLUNTEER
        }
        return false
    }

    goToAddSevasPage() {
        this.router.navigateByUrl('/seva-bookings/add-sevas')
    }

    async openMemberSearch() {
        const modal = await this.modalController.create({
            component: SearchMembersComponent,
            cssClass: 'my-custom-class'
        })
        await modal.present()
        const details = await modal.onDidDismiss()
        if (details.data) {
            this.memberDetails = details.data
        }
    }

}

@Component({
    selector: 'app-terms-and-condition',
    templateUrl: './terms-and-condition.html'
})
export class TermsAndConditions {

    constructor(private modalController: ModalController,
        private loadingController: LoadingController,
        private toastCtrl: ToastController) { }

    @Output()
    private agreedToTerms: EventEmitter<boolean> = new EventEmitter()

    dismissModal() {
        this.modalController.dismiss()
    }

    isChecked(event: CustomEvent) {
        this.agreedToTerms.emit(event.detail.checked)
    }
}