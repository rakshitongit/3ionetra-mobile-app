import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-add-sevas',
    templateUrl: './add-sevas.component.html',
    styleUrls: ['./add-sevas.component.scss'],
})
export class AddSevasComponent implements OnInit {

    quantity: number[] = [...Array.from(Array(100), (_, i) => i + 1)]

    constructor(private modalCtrl: ModalController) { }

    ngOnInit() { }

    dismissModal() {
        this.modalCtrl.dismiss()
    }

}
