import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DateTimeUtils } from 'src/app/utils/web-utils';
import { SevaTypeName } from 'src/app/services/seva-booking.service';

@Component({
    selector: 'app-add-sevas',
    templateUrl: './add-sevas.component.html',
    styleUrls: ['./add-sevas.component.scss'],
})
export class AddSevasComponent implements OnInit {

    @Input()
    sevaType: SevaTypeName

    @Output()
    private validSevas: EventEmitter<SingleSevaMetaData[]> = new EventEmitter()

    quantity: number[] = [...Array.from(Array(100), (_, i) => i + 1)]

    singleSeva: SingleSevaMetaData = new SingleSevaMetaData()

    allSevas: SingleSevaMetaData[] = []

    donationSevaTypes: string[] = []

    utsavs: string[] = []

    locallyAddedSevas: SingleSevaMetaData[] = []

    shashwatSevaTypes: ShashwatSevaType[] = []

    yearValues: string

    constructor() { }

    ngOnInit() {
        this.donationSevaTypes = ['General Donation', 'Pooja corpus fund', 'Building Fund', 'Education fund', 'Trust Corpus Fund', 'Kanika / Donation']
        this.utsavs = ['Ganesh Chaturti 2020', 'Vardanti Utsav 2020']
        this.singleSeva.sevaQty = 1
        const singleSeva: SingleSevaMetaData = new SingleSevaMetaData()
        singleSeva.sevaName = "Ratri Pooja"
        singleSeva.sevaAmount = 1000
        this.allSevas.push({ ...singleSeva })
        singleSeva.sevaName = "Madhyaana Pooja"
        singleSeva.sevaAmount = 1500
        this.allSevas.push({ ...singleSeva })
        this.yearValues = DateTimeUtils.getRageOfDate()
        this.shashwatSevaTypes = [ShashwatSevaType.TITHI_PAKSHA_MASA, ShashwatSevaType.DATE]
    }

    updateSevaAmount(event: Event) {
        const foundSeva: SingleSevaMetaData = this.allSevas.find(it => it.sevaName === this.singleSeva.sevaName)
        if (foundSeva !== undefined && foundSeva.sevaAmount !== undefined && this.singleSeva.sevaQty !== undefined) {
            this.singleSeva.sevaAmount = foundSeva.sevaAmount * this.singleSeva.sevaQty
        }
    }

    updateDateRange(event: Event) {
        // update date as per utsavs
    }

    areAllInputsCorrect() {
        if(this.sevaType == SevaTypeName.NITYA_SEVA || this.sevaType == SevaTypeName.UTSAV_SEVA) {
            return !(this.singleSeva.sevaName !== undefined && this.singleSeva.sevaQty !== undefined && this.singleSeva.sevaDate !== undefined)
        }
        if(this.sevaType == SevaTypeName.SHASWAT_SEVA) {
            return false
        }
        if(this.sevaType == SevaTypeName.DONATION) {
            return this.singleSeva.sevaAmount === undefined || this.singleSeva.sevaAmount === undefined
        }
    }

    locallyAddSevas() {
        this.locallyAddedSevas.push({ ...this.singleSeva })
        this.validSevas.emit([...this.locallyAddedSevas])
        this.initialize()
    }

    public initialize() {
        this.singleSeva.sevaName = undefined
        this.singleSeva.sevaQty = undefined
        this.singleSeva.sevaAmount = undefined
        this.singleSeva.sevaDate = undefined
        this.singleSeva.shashwatSevaType = undefined
        this.singleSeva.micrNumber = undefined
        this.singleSeva.paksha = undefined
        this.singleSeva.panNumber = undefined
        this.singleSeva.paymentMode = undefined
        this.singleSeva.remarks = undefined
        this.singleSeva.tithi = undefined
        this.singleSeva.utsavName = undefined
        this.singleSeva.aadharNumber = undefined
        this.singleSeva.chequeNumber = undefined
        this.singleSeva.masa = undefined
        this.singleSeva.utsavName = undefined
    }

    public getTotalAmount(): number {
        return this.locallyAddedSevas.reduce((acc, it) => acc += it.sevaAmount, 0)
    }

    public removeSeva(seva: SingleSevaMetaData) {
        this.locallyAddedSevas = this.locallyAddedSevas.filter(it => it.sevaName !== seva.sevaName)
        this.validSevas.emit([...this.locallyAddedSevas])
    }

    public isUtsavSeva(): boolean {
        return this.sevaType == SevaTypeName.UTSAV_SEVA
    }

    public isShashwatSeva(): boolean {
        return this.sevaType == SevaTypeName.SHASWAT_SEVA
    }

    public canDisplayDate(): boolean {
        if(this.isShashwatSeva()) {
            return this.singleSeva.shashwatSevaType === ShashwatSevaType.DATE
        }
        return true
    }

    public canDisplayTithiPakshaMasa(): boolean {
        if(this.isShashwatSeva()) {
            return this.singleSeva.shashwatSevaType === ShashwatSevaType.TITHI_PAKSHA_MASA
        }
        return false
    }

    public isDonationSeva(): boolean {
        return this.sevaType == SevaTypeName.DONATION
    }

}

export class SingleSevaMetaData {
    sevaName: string
    sevaQty: number
    sevaAmount: number
    sevaDate: string
    paymentMode: PaymentMode
    chequeNumber: string
    micrNumber: string
    utsavName: string
    tithi: string
    paksha: string
    masa: string
    shashwatSevaType: ShashwatSevaType
    panNumber: string
    aadharNumber: string
    remarks: string
}

export enum PaymentMode {
    CASH = "cash",
    CHEQUE = "cheque",
    ONLINE = "online"
}

export enum ShashwatSevaType {
    TITHI_PAKSHA_MASA = "By Tithi/Paksha/Masa",
    DATE = "By Date"
}
