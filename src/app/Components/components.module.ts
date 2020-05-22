import { MapBoxComponent } from './map-box/map-box.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { RouterInfoInBottomComponent } from './router-info-in-bottom/router-info-in-bottom.component';
import { SearchBarComponent } from './search-bar/search-bar.component'
import { RidingToggleComponent } from './riding-toggle/riding-toggle.component';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({

    declarations: [MapBoxComponent, MainMenuComponent, RouterInfoInBottomComponent, SearchBarComponent, RidingToggleComponent],
    imports: [IonicModule, CommonModule, FormsModule],
    exports: [MapBoxComponent, MainMenuComponent, RouterInfoInBottomComponent, SearchBarComponent, RidingToggleComponent],
    providers:[MapBoxComponent,MainMenuComponent]
  })
  export class ComponentsModule {}
  