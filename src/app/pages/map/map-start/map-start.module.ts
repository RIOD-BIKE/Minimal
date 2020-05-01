import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapStartPageRoutingModule } from './map-start-routing.module';

import { MapStartPage } from './map-start.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { MapBoxComponent } from 'src/app/components/map-box/map-box.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapStartPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [MapStartPage],
  entryComponents: [MapBoxComponent],
  providers: []
})
export class MapStartPageModule {}
