import {MapBoxComponent} from './map-box/map-box.component';
import {MapNavigationComponent} from './map-navigation/map-navigation.component';
import {MapSlideInBottomComponent} from './map-slide-in-bottom/map-slide-in-bottom.component';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
@NgModule({

    declarations: [MapBoxComponent],
    imports: [IonicModule],
    exports: [MapBoxComponent],
    providers:[MapBoxComponent]
  })
  export class ComponentsModule {}
  