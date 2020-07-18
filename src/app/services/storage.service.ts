import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    constructor(public storage: Storage) { }

    setToken(token: string) {
        return this.storage.set('token', token)
    }

    getToken(): Promise<string> {
        return this.storage.get('token')
    }

    removeToken() {
        this.storage.remove('token')
    }

    setMemberType(memberType: MemberType) {
        return this.storage.set('memberType', memberType)
    }

    getMemberType(): Promise<MemberType> {
        return this.storage.get('memberType')
    }

    setBookingHistory() {
        return this.storage.set('booking-history', true)
    }

    getBookingHistory() {
        return this.storage.get('booking-history')
    }

    clearBookingHistory() {
        return this.storage.remove('booking-history')
    }
}

export enum MemberType {
    DEVOTEE = "devotee",
    VOLUNTEER = "volunteer"
}
