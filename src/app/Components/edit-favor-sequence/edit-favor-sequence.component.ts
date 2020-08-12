import { Component, OnInit } from '@angular/core';
import {  miniShortcut } from 'src/app/Classess/map/map';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-edit-favor-sequence',
  templateUrl: './edit-favor-sequence.component.html',
  styleUrls: ['./edit-favor-sequence.component.scss'],
})
export class EditFavorSequenceComponent implements OnInit {
  public favorList: miniShortcut[]=[];
  constructor(
    private navController: NavController
  ) { }

  ngOnInit() {}

  back(){
    this.navController.navigateForward('edit-favorite');
  }
  saveRoute(){}
  deleteFavor(){}
  dismiss(){}
}
