import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SingleSevaMetaData, PaymentMode } from '../add-sevas/add-sevas.component';
import { MemberType, StorageService } from 'src/app/services/storage.service';

@Component({
    selector: 'app-select-payment-mode-for-sevas',
    templateUrl: './select-payment-mode-for-sevas.component.html',
    styleUrls: ['./select-payment-mode-for-sevas.component.scss'],
})
export class SelectPaymentModeForSevasComponent implements OnInit {

    @Input()
    addedSevas: SingleSevaMetaData[]

    @Output()
    private onValidation: EventEmitter<boolean> = new EventEmitter()

    public paymentModeList: PaymentMode[] = []

    private membertype: MemberType

    constructor(private storageService: StorageService) { }

    async ngOnInit() {
        this.membertype = await this.storageService.getMemberType()
        if(this.membertype === MemberType.DEVOTEE) {
            this.paymentModeList = [PaymentMode.ONLINE]
        } else if(this.membertype === MemberType.VOLUNTEER) {
            this.paymentModeList = [PaymentMode.CHEQUE, PaymentMode.CASH]
        }

        setInterval(()=> {
            this.onValidation.emit(this.areAllPaymentModeEntered())
        }, 200)
    }

    public isPaymentModeCheque(seva: SingleSevaMetaData) {
        return seva.paymentMode === PaymentMode.CHEQUE
    }

    private areAllPaymentModeEntered(): boolean {
        let isValid: boolean = false
        for(let ev of this.addedSevas) {
            if(ev.paymentMode === PaymentMode.CHEQUE) {
                isValid = ev.chequeNumber !== undefined && ev.micrNumber !== undefined && ev.chequeNumber !== "" && ev.micrNumber !== ""
            } else if(ev.paymentMode === PaymentMode.CASH){
                isValid = true
            } else {
                // if undefined
                isValid = false
            }
        }
        return isValid
    }

}
