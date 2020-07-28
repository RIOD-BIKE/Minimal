import { MapDataFetchService } from './../../services/map-data-fetch/map-data-fetch.service';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-ride-indicator',
  templateUrl: './ride-indicator.component.html',
  styleUrls: ['./ride-indicator.component.scss'],
})
export class RideIndicatorComponent implements OnInit {

  statusColor: string;

  constructor(private modalController: ModalController, private mapDataFetch: MapDataFetchService) { }

  async ngOnInit() {
    this.mapDataFetch.activeCluster.subscribe(activeCluster => {
      if (!activeCluster) {
        this.statusColor = '#ffe500';
        console.log('User is alone :(');
        return;
      }
      const count = activeCluster.count;
      if (count >= 5 && count <= 15) {
        this.statusColor = '#00eeff';
        console.log('User in a group.');
      } else if (count > 15) {
        this.statusColor = '#ff1ad9';
        console.log('User is in an association!');
      }
    });
    // uncomment for a little party
    // setInterval(() => {
    //   this.statusColor = `rgb(${ Math.floor((Math.random() * 255) + 1) }, ${ Math.floor((Math.random() * 255) + 1) }, ${ Math.floor((Math.random() * 255) + 1) })`;
    // }, 50);
  }
}
