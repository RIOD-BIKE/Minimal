import { MapBoxComponent } from 'src/app/components/map-box/map-box.component';
import { MainMenuComponent } from 'src/app/components/main-menu/main-menu.component';
import { RouterInfoInBottomComponent } from 'src/app/components/router-info-in-bottom/router-info-in-bottom.component';
import { SearchBarComponent } from 'src/app/components/search-bar/search-bar.component'
import { RidingToggleComponent } from 'src/app/components/riding-toggle/riding-toggle.component';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@NgModule({

    declarations: [MapBoxComponent, MainMenuComponent, RouterInfoInBottomComponent, SearchBarComponent, RidingToggleComponent],
    imports: [IonicModule],
    exports: [MapBoxComponent, MainMenuComponent, RouterInfoInBottomComponent, SearchBarComponent, RidingToggleComponent],
    providers:[MapBoxComponent]
  })
  export class ComponentsModule {}
  