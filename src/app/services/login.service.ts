import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginWithMobile, LoginWithOtp } from '../utils/models';
import { WebUtils } from '../utils/web-utils';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private http: HttpClient) { }

    loginWithMobile(loginDetails: LoginWithMobile): Observable<{ otp: number }> {
        const url: string = WebUtils.root_url + "login"
        return this.http.post<{ otp: number }>(url, loginDetails)
    }

    verifyOtp(details: LoginWithOtp): Observable<void> {
        const url: string = WebUtils.root_url + "verify-otp"
        return this.http.post<void>(url, details)
    }
}
