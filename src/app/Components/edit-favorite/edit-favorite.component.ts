import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RoutingUserService } from 'src/app/services/routing-user/routing-user.service';
import { UserService } from 'src/app/services/user/user.service';
import { iconShortcut, miniShortcut } from 'src/app/Classess/map/map';
import { LOADIPHLPAPI } from 'dns';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-favorite',
  templateUrl: './edit-favorite.component.html',
  styleUrls: ['./edit-favorite.component.scss'],
})
export class EditFavoriteComponent implements OnInit {
  public favorList: miniShortcut[] = [];
  constructor(
    private modalController: ModalController,
    private routingUserService: RoutingUserService,
    private userService: UserService,
    private router: Router

  ) { }
  
  ngOnInit() {
    this.userService.getAllShortcuts().then((allShortcuts) => {
      let temp: iconShortcut[] = [];
      temp = allShortcuts;
      
      for (const route of temp) {
        const splitString = route.address.split(",");
       // console.log(splitString); 
        const splitPLz = splitString[2].toString().split(" ");
        console.log(splitPLz);
        
        const city = splitPLz[1];
        const street = splitString[0] + ", " + splitString[1]; 
        
      //  console.log(city + street);
        this.favorList.push(new miniShortcut(route.iconName, street, city));
      }
    });
  }
  
  changeSequence(){
    console.log("klick");
    
  }
  

  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }
  back(){
    this.dismiss();
  }
  deleteFavor(){}
  saveRoute(){}
}
