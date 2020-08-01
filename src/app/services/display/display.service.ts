import { SettingsService } from './../settings/settings.service';
import { MapStartPage } from 'src/app/pages/map/map-start/map-start.page';
import { RoutingUserService } from './../routing-user/routing-user.service';
import { Injectable } from '@angular/core';
import { Insomnia } from '@ionic-native/insomnia/ngx';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  private isIndicatorScreenVisible = false;
  private isRouting = false;

  constructor(private insomnia: Insomnia, private settingsService: SettingsService) { }

  setIsIndicatorScreenVisible(isVisible: boolean) {
    this.isIndicatorScreenVisible = isVisible;
    this.checkShouldKeepScreenOn();
  }

  setIsRouting(isRouting: boolean) {
    this.isRouting = isRouting;
    this.checkShouldKeepScreenOn();
  }

  async checkShouldKeepScreenOn() {
    if(!await this.settingsService.getDisplay()) { return; }

    if(this.isIndicatorScreenVisible && this.isRouting) {
      await this.insomnia.keepAwake();
    } else {
      await this.insomnia.allowSleepAgain();
    }
  }
}
