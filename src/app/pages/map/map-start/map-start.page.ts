import { Component, OnInit } from '@angular/core';
import { MapBoxComponent } from 'src/app/Components/map-box/map-box.component';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MainMenuComponent } from 'src/app/Components/main-menu/main-menu.component';
import { RoutingUserService } from 'src/app/services/routing-user/routing-user.service';

@Component({
  selector: 'app-map-start',
  templateUrl: './map-start.page.html',
  styleUrls: ['./map-start.page.scss'],
})
export class MapStartPage implements OnInit {


  public showStart=true;
  public showMain=false;
  private 
  private showRide:false;
 constructor(private routingUserService:RoutingUserService, private mapBox: MapBoxComponent,private statusBar: StatusBar, private mainMenu: MainMenuComponent ) { 
this.init();
 }
 init(){
  this.statusBar.overlaysWebView(true);
  this.statusBar.backgroundColorByHexString('#44000000');
  this.mapBox.setupMap();
 }

  ngOnInit() {

  }
  locateDevice() {
    this.mapBox.moveMapToCurrent();
  }


  setShowChange():Promise<any>{
    return new Promise(resolve => {
    this.showMain=!this.showMain;
    this.showStart=!this.showStart;
    resolve();
    });
  }


  setShowMain():Promise<any>{
    return new Promise(resolve => {
      this.mainMenu.setUpStart();
    this.showMain=true;
    this.showStart=false;
    resolve();
    });
  }
  setShowStart():Promise<any>{
    return new Promise(resolve => {
    this.showMain=false;
    this.showStart=true;
 
    resolve();
    });
  }





}
