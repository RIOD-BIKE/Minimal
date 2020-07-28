import { MapStartPage } from 'src/app/pages/map/map-start/map-start.page';
import { RideIndicatorComponent } from './../ride-indicator/ride-indicator.component';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { RideIndicatorFinalComponent } from '../ride-indicator-final/ride-indicator-final.component';
import { RideIndicatorFreeComponent } from '../ride-indicator-free/ride-indicator-free.component';
import { RideIndicatorAssemblyComponent } from './../ride-indicator-assembly/ride-indicator-assembly.component';

@Component({
  selector: 'riding-toggle',
  templateUrl: './riding-toggle.component.html',
  styleUrls: ['./riding-toggle.component.scss'],
})
export class RidingToggleComponent implements OnInit {

  constructor(private modalController: ModalController, private mapStart: MapStartPage) { }

  ngOnInit() {}

  async showIndicatorScreen() {
    this.mapStart.toggleShowIndicatorScreen();
  }
}
