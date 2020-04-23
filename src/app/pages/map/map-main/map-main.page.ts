
import { Component, OnInit } from '@angular/core';
import { MapBoxComponent } from '../../../components/map-box/map-box.component';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-map-main',
  templateUrl: './map-main.page.html',
  styleUrls: ['./map-main.page.scss'],
})
export class MapMainPage implements OnInit {

  constructor(private mapBox: MapBoxComponent,private statusBar: StatusBar ) { }

  ngOnInit() {
    this.statusBar.overlaysWebView(true);
    this.statusBar.backgroundColorByHexString('#44000000');
    this.mapBox.setupMap();
  }


}
