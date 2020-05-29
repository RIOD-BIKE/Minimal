import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'waiting-at-as-small',
  templateUrl: './waiting-at-as-small.component.html',
  styleUrls: ['./waiting-at-as-small.component.scss'],
})
export class WaitingAtAsSmallComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  showMore(){
  	console.log('hi!')
  }

}
