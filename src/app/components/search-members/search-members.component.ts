import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SingleSevaMetaData } from '../add-sevas/add-sevas.component';
import { MemberDetailsMetaData } from '../member-details/member-details.component';

@Component({
    selector: 'app-search-members',
    templateUrl: './search-members.component.html',
    styleUrls: ['./search-members.component.scss'],
})
export class SearchMembersComponent implements OnInit {

    returnMember: MemberDetailsMetaData

    constructor(private modalCtrl: ModalController) { }

    ngOnInit() { }

    closeModal() {
        this.modalCtrl.dismiss(this.returnMember)
    }

    selectMember() {
        this.returnMember = new MemberDetailsMetaData()
        this.returnMember.first_name = "Jane"
        this.returnMember.last_name = "Doe"
        this.returnMember.mobile_number = 9090909090
        this.returnMember.sevedaar_name = "Jane Doe"
        this.returnMember.email = "jane@co.in"
        this.returnMember.country = "IN"
        this.returnMember.state = "MH"
        this.returnMember.locality = "Somewhere around the world"
        this.returnMember.pincode = 346600
        this.returnMember.city = "Uganda"
        this.returnMember.address = "Address AddressAddressAddressAddress"
        this.modalCtrl.dismiss(this.returnMember)
    }
}
