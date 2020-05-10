import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndicatorSingle2Page } from './indicator-single2.page';

const routes: Routes = [
  {
    path: '',
    component: IndicatorSingle2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndicatorSingle2PageRoutingModule {}
