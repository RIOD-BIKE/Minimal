import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { TutorialOverlay1Component } from './Components/tutorial/tutorial-overlay1/tutorial-overlay1.component';
import { TutorialOverlay2Component } from './Components/tutorial/tutorial-overlay2/tutorial-overlay2.component';
@NgModule({
  declarations: [AppComponent, TutorialOverlay1Component, TutorialOverlay2Component],
  entryComponents: [TutorialOverlay1Component, TutorialOverlay2Component],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
