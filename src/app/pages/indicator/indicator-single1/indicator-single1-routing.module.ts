import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndicatorSingle1Page } from './indicator-single1.page';

const routes: Routes = [
  {
    path: '',
    component: IndicatorSingle1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndicatorSingle1PageRoutingModule {}
