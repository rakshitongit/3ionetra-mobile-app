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
}
