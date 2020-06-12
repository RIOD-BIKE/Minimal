import { Component, OnInit } from '@angular/core';
import { MapBoxComponent } from 'src/app/Components/map-box/map-box.component';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ModalController } from '@ionic/angular';
import { TutorialOverlay1Component } from '../../../Components/tutorial/tutorial-overlay1/tutorial-overlay1.component';
@Component({
  selector: 'app-map-start',
  templateUrl: './map-start.page.html',
  styleUrls: ['./map-start.page.scss'],
})
export class MapStartPage implements OnInit {

 constructor(private mapBox: MapBoxComponent,
             private statusBar: StatusBar,
             public modalController: ModalController ) { }

  ngOnInit() {
    this.statusBar.overlaysWebView(true);
    this.statusBar.backgroundColorByHexString('#44000000');
    this.mapBox.setupMap();
    this.presentModal();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: TutorialOverlay1Component
    });
    return await modal.present();
  }

}
