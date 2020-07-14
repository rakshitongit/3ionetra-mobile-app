import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Injectable()
export class LoginGuard implements CanActivate {

    constructor(
        private router: Router,
        private storageService: StorageService,
    ) { }

    async canActivate(): Promise<boolean> {
        try {
            let token = await this.storageService.getToken()
            if (token !== null) {
                return true
            } else {
                this.router.navigate(['/login'])
                return false
            }
        } catch (e) {
            console.error(e);
        }
        return false;
    }
}
