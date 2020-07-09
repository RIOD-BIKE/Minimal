import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth/auth.service';
import { UsersDataFetchService } from './../../../services/users-data-fetch/users-data-fetch.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-main',
  templateUrl: './settings-main.page.html',
  styleUrls: ['./settings-main.page.scss'],
})
export class SettingsMainPage implements OnInit {

  uid: string;
  name: string;
  contact: string;

  constructor(private router: Router, private userDateFetch: UsersDataFetchService, private authService: AuthService, private navController: NavController) { }

  async ngOnInit() {
    this.uid = await this.authService.getCurrentUID();
    this.name = await this.userDateFetch.firestore_getName(this.uid);
    this.contact = await this.userDateFetch.firestore_getContact(this.uid);
  }

  cancel() {
    this.navController.back();
  }

  async save() {
    await this.userDateFetch.firestore_setName(await this.authService.getCurrentUID(), this.name);
    await this.userDateFetch.firestore_setContact(await this.authService.getCurrentUID(), this.contact);
    this.cancel();
  }
}
