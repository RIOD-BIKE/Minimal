import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapRidePage } from './map-ride.page';

const routes: Routes = [
  {
    path: '',
    component: MapRidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapRidePageRoutingModule {}
