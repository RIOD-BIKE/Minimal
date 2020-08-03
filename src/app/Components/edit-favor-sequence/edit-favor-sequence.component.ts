import { Component, OnInit } from '@angular/core';
import {  miniShortcut } from 'src/app/Classess/map/map';
@Component({
  selector: 'app-edit-favor-sequence',
  templateUrl: './edit-favor-sequence.component.html',
  styleUrls: ['./edit-favor-sequence.component.scss'],
})
export class EditFavorSequenceComponent implements OnInit {
  public favorList: miniShortcut[]=[];
  constructor() { }

  ngOnInit() {}

  back(){}
  saveRoute(){}
  deleteFavor(){}
  dismiss(){}
}
