import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndicatorGruppePage } from './indicator-gruppe.page';

const routes: Routes = [
  {
    path: '',
    component: IndicatorGruppePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndicatorGruppePageRoutingModule {}
