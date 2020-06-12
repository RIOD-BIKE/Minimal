import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ButtonOverlayComponent } from '../button-overlay/button-overlay.component';

@Component({
  selector: 'router-info-in-bottom',
  templateUrl: './router-info-in-bottom.component.html',
  styleUrls: ['./router-info-in-bottom.component.scss'],
})
export class RouterInfoInBottomComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    // this.presentModal();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ButtonOverlayComponent
    });
    return await modal.present();
  }
}
