import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { IonSlides} from '@ionic/angular';


@Component({
  selector: 'app-explain-slides',
  templateUrl: './explain-slides.component.html',
  styleUrls: ['./explain-slides.component.scss'],
})
export class ExplainSlidesComponent implements OnInit {
  @ViewChild('mySlider', { static: true }) slides: IonSlides;
  hidePrev: boolean = false;
  hideNext: boolean = true;
  trenner:boolean = true;
  constructor(public modalController: ModalController, private router: Router) { }

  ngOnInit() {}

  dismiss() {
  this.modalController.dismiss({
      'dismissed': true
    });
  }

  swipeNext() {
    this.slides.slideNext();
  }

  back(){
    this.slides.slidePrev();
  }

  goToSignUp() {
    this.dismiss();
    this.router.navigate(['/sign-up-tab2']);
  }

  slideChanged() {
    this.slides.isEnd().then((istrue) => {
      if (istrue) {
        this.hideNext = false;
        this.trenner = false;
      } else {
        this.hideNext = true;
        this.hidePrev = true;
        this.trenner= true;
      }
    });

    this.slides.isBeginning().then((istrue) => {
      if (istrue) {
        this.hidePrev = false;
      } else {
        if(this.trenner ==true) {
          this.hideNext = true;
        }       
        this.hidePrev = true;
      }
    });

   
}

  reachedStart() {
      this.hidePrev = true;
  }
  
  reachedEnd() {
      this.hideNext = false;
  }

}
