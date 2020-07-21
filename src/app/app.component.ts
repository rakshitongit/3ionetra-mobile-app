import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators'
import { SevaTypeName } from './services/seva-booking.service';
import { AppState } from './services/themes.service';
import { StorageService, MemberType } from './services/storage.service';
import { async } from '@angular/core/testing';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
    public selectedIndex = 0
    public appPages = [
        {
            title: 'News',
            url: '/news',
            icon: 'paper-plane'
        },
        {
            title: 'Nitya Seva Booking',
            url: '/seva-bookings/' + SevaTypeName.NITYA_SEVA,
            icon: 'bar-chart'
        },
        {
            title: 'Utsav Seva Booking',
            url: '/seva-bookings/' + SevaTypeName.UTSAV_SEVA,
            icon: 'library'
        },
        {
            title: 'Shaswat Seva Booking',
            url: '/seva-bookings/' + SevaTypeName.SHASWAT_SEVA,
            icon: 'calendar'
        },
        {
            title: 'Donation',
            url: '/seva-bookings/' + SevaTypeName.DONATION,
            icon: 'cash'
        },
        {
            title: 'Seva Details',
            url: '/seva-details',
            icon: 'list-circle'
        },
        {
            title: 'Booking History',
            url: '/booking-history',
            icon: 'hourglass'
        },
        {
            title: 'Logout',
            url: '/login',
            icon: 'power'
        }
    ];
    public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private router: Router,
        public global: AppState,
        private storageService: StorageService
    ) {
        this.initializeApp()
        this.router.events.pipe(
            filter((event: RouterEvent) => event instanceof NavigationEnd),
        ).subscribe(async (data) => {
            this.checkAndUpdateSelectedIndex(data.url)
            let memberType = await storageService.getMemberType()
            if (memberType !== null) {
                if (memberType === MemberType.DEVOTEE) {
                    this.changeTheme('theme-devotee')
                } else {
                    this.changeTheme('theme-volunteer')
                }
            }
        })
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    private checkAndUpdateSelectedIndex(path: string) {
        if (path !== undefined) {
            this.selectedIndex = this.appPages.findIndex(page => page.url === path)
        }
    }

    changeTheme(theme: any) {
        this.global.set('theme', theme);
    }

    ngOnInit() {
    }
}
