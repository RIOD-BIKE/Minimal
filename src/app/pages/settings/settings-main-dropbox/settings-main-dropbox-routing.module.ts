import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsMainDropboxPage } from './settings-main-dropbox.page';

const routes: Routes = [
  {
    path: '',
    component: SettingsMainDropboxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsMainDropboxPageRoutingModule {}
