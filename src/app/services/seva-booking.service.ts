import { Injectable } from '@angular/core';
import { SingleSevaMetaData } from '../components/add-sevas/add-sevas.component';

@Injectable({
    providedIn: 'root'
})
export class SevaBookingService {

    private _locallyAddedSevas: SingleSevaMetaData[] = []

    constructor() { }

    getAllAddedSevas(): SingleSevaMetaData[] {
        return (this._locallyAddedSevas === undefined) ? [] : [...this._locallyAddedSevas]
    }

    updateAllSevas(allsevas: SingleSevaMetaData[]): void {
        this._locallyAddedSevas = [...allsevas]
    }
}

export class SevaType {
    name: SevaTypeName
}

export enum SevaTypeName {
    NITYA_SEVA = 'nitya',
    UTSAV_SEVA = 'utsav',
    SHASWAT_SEVA = 'shaswat',
    DONATION = 'donation'
}