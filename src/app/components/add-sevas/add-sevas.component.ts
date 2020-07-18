import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DateTimeUtils } from 'src/app/utils/web-utils';
import { PaymentModePage } from 'src/app/pages/seva-bookings/payment-mode/payment-mode.page';

@Component({
    selector: 'app-add-sevas',
    templateUrl: './add-sevas.component.html',
    styleUrls: ['./add-sevas.component.scss'],
})
export class AddSevasComponent implements OnInit {

    @Output()
    private validSevas: EventEmitter<SingleSevaMetaData[]> = new EventEmitter()

    quantity: number[] = [...Array.from(Array(100), (_, i) => i + 1)]

    singleSeva: SingleSevaMetaData = new SingleSevaMetaData()

    allSevas: SingleSevaMetaData[] = []

    locallyAddedSevas: SingleSevaMetaData[] = []

    yearValues: string

    constructor() { }

    ngOnInit() {
        this.singleSeva.sevaQty = 1
        const singleSeva: SingleSevaMetaData = new SingleSevaMetaData()
        singleSeva.sevaName = "Ratri Pooja"
        singleSeva.sevaAmount = 1000
        this.allSevas.push({ ...singleSeva })
        singleSeva.sevaName = "Madhyaana Pooja"
        singleSeva.sevaAmount = 1500
        this.allSevas.push({ ...singleSeva })
        this.yearValues = DateTimeUtils.getRageOfDate()
    }

    updateSevaAmount(event: Event) {
        const foundSeva: SingleSevaMetaData = this.allSevas.find(it => it.sevaName === this.singleSeva.sevaName)
        if (foundSeva !== undefined && foundSeva.sevaAmount !== undefined && this.singleSeva.sevaQty !== undefined) {
            this.singleSeva.sevaAmount = foundSeva.sevaAmount * this.singleSeva.sevaQty
        }
    }

    areAllInputsCorrect() {
        return !(this.singleSeva.sevaName !== undefined && this.singleSeva.sevaQty !== undefined && this.singleSeva.sevaDate !== undefined)
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
    }

    public getTotalAmount(): number {
        return this.locallyAddedSevas.reduce((acc, it) => acc += it.sevaAmount, 0)
    }

    public removeSeva(seva: SingleSevaMetaData) {
        this.locallyAddedSevas = this.locallyAddedSevas.filter(it => it.sevaName !== seva.sevaName)
        this.validSevas.emit([...this.locallyAddedSevas])
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
}

export enum PaymentMode {
    CASH = "cash",
    CHEQUE = "cheque",
    ONLINE = "online"
}
