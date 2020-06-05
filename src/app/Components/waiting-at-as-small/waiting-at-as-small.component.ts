import { Component, OnInit } from '@angular/core';


@Component({
	selector: 'waiting-at-as-small',
	templateUrl: './waiting-at-as-small.component.html',
	styleUrls: ['./waiting-at-as-small.component.scss'],
})
export class WaitingAtAsSmallComponent implements OnInit {
	progessCircleSize = 200; //change the size and radius of Circle Progess hier, value depend on Time. Max =200 Min=
	progessSize: any = 100; //change the width of progess bar hier, value depend on Time. Max =100
	progessWidth = this.progessSize + '%';
	progessCircleRadius = (this.progessCircleSize / 2) + 'px';
	progessColor = 'linear-gradient(to right,red, #383838, red)';
	progessGo: any = true;
	progessCircleColor = 'radial-gradient(circle, #383838,#383838, red)';

	ngOnInit() {

		var circleProgess = document.getElementById("progessCircle");
		var timerCircle = document.getElementById("timerCircle");
		circleProgess.style.width = this.progessCircleSize + 'px';
		circleProgess.style.height = this.progessCircleSize + 'px';
		circleProgess.style.borderRadius = this.progessCircleRadius;
		//circleProgess.style.marginLeft = '-'+this.progessCircleRadius;
		if (this.progessSize < 31 && this.progessGo == false) {
			this.progessColor = 'linear-gradient(to right,yellow, #383838, yellow)';
		}
		if (this.progessGo) {
			this.progessColor = 'linear-gradient(to right,green, #383838, green)';
		}
		if (this.progessCircleSize < 141 && this.progessGo == false) {
			this.progessCircleColor = 'radial-gradient(circle, #383838,#383838, yellow)';
		}
		if (this.progessGo) {
			this.progessCircleColor = 'radial-gradient(circle, #383838,#383838, green)';
		}
	}
	showMore() {
		var changeDivHeight = document.getElementById("myOver");
		var x = document.getElementById("hide");
		var y = document.getElementById("btn2-toChange");
		var timerCircle = document.getElementById("timerCircle");
		x.hidden = true;
		timerCircle.hidden = false;
		var z = document.getElementById("show-div");
		var t = document.getElementById("hide-div");
		changeDivHeight.style.height = "200px";
		z.hidden = true;
		t.hidden = false;
		y.hidden = true;
	}
	hideMore() {
		var changeDivHeight = document.getElementById("myOver");
		var x = document.getElementById("hide");
		var y = document.getElementById("btn2-toChange");
		changeDivHeight.style.height = "auto";
		var timerCircle = document.getElementById("timerCircle");
		x.hidden = false;
		var z = document.getElementById("show-div");
		var t = document.getElementById("hide-div");
		z.hidden = false;
		t.hidden = true;
		y.hidden = false;
		timerCircle.hidden = true;
	}


}
