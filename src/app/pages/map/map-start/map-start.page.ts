import { MapDataFetchService } from './../../../services/map-data-fetch/map-data-fetch.service';
import { Component, OnInit, Directive, ViewChild } from '@angular/core';
import { MapBoxComponent } from 'src/app/Components/map-box/map-box.component';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MainMenuComponent } from 'src/app/Components/main-menu/main-menu.component';
import { RoutingUserService } from 'src/app/services/routing-user/routing-user.service';
import { ModalController } from '@ionic/angular';
import { TutorialOverlay1Component } from '../../../Components/tutorial/tutorial-overlay1/tutorial-overlay1.component';
import 'mapbox-gl/dist/mapbox-gl.css';
import { RouterInfoInBottomComponent } from 'src/app/Components/router-info-in-bottom/router-info-in-bottom.component';
import { RouterStartComponent } from 'src/app/Components/router-start/router-start.component';

@Component({
  selector: 'app-map-start',
  templateUrl: './map-start.page.html',
  styleUrls: ['./map-start.page.scss']
})


export class MapStartPage implements OnInit {

  /*
  <ion-header>
    <search-bar [hidden]="!showRidingToggle"></search-bar>
    <main-menu [hidden]="!showMain" ></main-menu>
  </ion-header>
*/

  public showRidingToggle:boolean = true;
  public showMain:boolean = false;
  public showRouterInfo:boolean=false;
  private showRide:boolean= false;
 constructor(private routingUserService: RoutingUserService, private mapBox: MapBoxComponent,
             private statusBar: StatusBar, private mainMenu: MainMenuComponent, private modalController: ModalController,
             private mapDataFetch: MapDataFetchService,private routerInfo:RouterInfoInBottomComponent,routerStart:RouterStartComponent) {
  this.init();
 }
 init() {
  this.statusBar.overlaysWebView(true);
  this.statusBar.backgroundColorByHexString('#44000000');
  this.mapBox.setupMap();
  //this.presentModal();
  this.routingUserService.getDisplayTypeObs().subscribe(x=>{
    console.log(x);
    if(x==='Start'){
      this.setShowStart();
      
    }
    if(x==='Route_Info'){
      this.showMain=false;
      this.showRidingToggle=false;
      this.setShowRouterInfoBottom();
    }
    if(x==='Main'){
      this.setShowMain();
    }
  })
 }

  ngOnInit() {

  }
  locateDevice() {
    this.mapBox.moveMapToCurrent();
  }

  setChildView(){
 
    this.setShowMain();
  }



  setShowRouterInfoBottom():Promise<any>{
    return new Promise(resolve => {
      this.showRidingToggle=false;
    this.showRouterInfo= !this.showRouterInfo;
    resolve();
    });
  }


  setShowMain(): Promise<any>{
    return new Promise(resolve => {
      this.mainMenu.setUpStart();
      this.showMain = true;
      this.showRidingToggle = false;
      this.showRouterInfo=false;
      resolve();
    });
  }

  setShowStart(): Promise<any>{
    return new Promise(resolve => {
    this.showMain = false;
    this.showRidingToggle = false;
    this.showRouterInfo=false;
    resolve();
    });
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: TutorialOverlay1Component
    });
    return await modal.present();
  }

  DEMOsendToRTDB() {
    this.mapDataFetch.sendUserPosition();
  }

}
