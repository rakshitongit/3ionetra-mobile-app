import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators'

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
            title: 'Seva Booking',
            url: '/seva-bookings',
            icon: 'bar-chart'
        },
        {
            title: 'Seva Details',
            url: '/seva-details',
            icon: 'list-circle'
        },
        {
            title: 'Settings',
            url: '/folder/Archived',
            icon: 'cog'
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
        private router: Router
    ) {
        this.initializeApp()
        this.router.events.pipe(
            filter((event: RouterEvent) => event instanceof NavigationEnd),
        ).subscribe((data) => {
            this.checkAndUpdateSelectedIndex(data.url)
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

    ngOnInit() {
    }
}
