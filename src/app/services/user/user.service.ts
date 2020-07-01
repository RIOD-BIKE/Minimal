import { PositionI, RoutingGeoAssemblyPoint } from './../../Classess/map/map';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';




@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private storage:Storage,private geolocation: Geolocation, private platform: Platform) { }

  public behaviorMyOwnPosition = new BehaviorSubject(null);
  private firstTimeCalling = true;


  async getUserPosition(): Promise<PositionI> {
    return new Promise<PositionI>(resolve => {
      this.platform.ready().then(rdy => {
        const options = {
          enableHighAccuracy: true,
          timeout: 25000
        };
        this.geolocation.watchPosition(options).subscribe(x => {
          this.behaviorMyOwnPosition.next(x);
          this.firstTimeCalling = false;
        });
        this.geolocation.getCurrentPosition().then((resp) => {
          resolve(new PositionI(resp.coords.longitude, resp.coords.latitude));
        });
      });
    });
  }
//Uncomplete -> Dependend on new UI System
  public saveRoute(address,iconName,routeName?):Promise<any> {
    return new Promise(resolve=>{
      var i=0;
      this.storage.length().then(length=>{
        this.storage.forEach((value,key,index)=>{
          let keySpliced = key.split('_');
          if(keySpliced[0] == "SavedIcon"){
            console.log(keySpliced[1]+" | "+iconName)
            if(keySpliced[1]===iconName){  //iconName already saved -> override? Question
              this.storage.set(key,{address:address})
              resolve("Updated Address with icon");
              return;
            }
          }
          i++;
          if(i==length){
            this.storage.set("SavedIcon_"+iconName,{address:address});
            resolve("New Address saved with icon");
          }
        })
      })
    })
  }

  public getRoute(iconName):Promise<any>{
    return new Promise(resolve=>{
      var i=0;
      this.storage.length().then(length=>{
        this.storage.forEach((value,key,index)=>{
          let keySpliced = key.split('_');
          if(keySpliced[0] == "SavedIcon"){
            console.log(keySpliced[1]+" | "+iconName)
            if(keySpliced[1]===iconName){  //iconName already saved -> override? Question
              resolve(value);
              return;
            }
          }
          i++;
          if(i==length ){
            resolve("Route non existent");
          }
        })
      })
    });
  }
  public getAllRoutes():Promise<any>{
    return new Promise(resolve=>{
      
    });
  }

  public getfirstTimeCalling() {
    return this.firstTimeCalling;
  }
}
