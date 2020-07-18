import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-news',
    templateUrl: './news.page.html',
    styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

    slideOpts = {
        initialSlide: 1,
        speed: 400
    };

    constructor(private router: Router) { }

    ngOnInit() {
    }

    goToNewsDetails() {
        this.router.navigate(['/news/id'])
    }

}
