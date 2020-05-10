import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingsMainDropboxPageRoutingModule } from './settings-main-dropbox-routing.module';

import { SettingsMainDropboxPage } from './settings-main-dropbox.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingsMainDropboxPageRoutingModule
  ],
  declarations: [SettingsMainDropboxPage]
})
export class SettingsMainDropboxPageModule {}
