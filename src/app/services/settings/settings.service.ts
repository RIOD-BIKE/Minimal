import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private readonly KEY_GPS = 'settings_gps';
  private readonly KEY_VOLUME = 'settings_volume';
  private readonly KEY_VIBRATION = 'settings_vibration';
  private readonly KEY_DISPLAY = 'settings_display';


  private gps: boolean;
  private volume: number;
  private vibration: boolean;
  private display: boolean;

  constructor(private storage: Storage) {
  }

  async getGPS() {
    return this.gps ?? await this.storageGet(this.KEY_GPS) as boolean ?? true;
  }

  async getVolume() {
    return this.volume ?? await (this.storageGet(this.KEY_VOLUME)) as number ?? 1.0;
  }

  async getVibration() {
    return this.vibration ?? await this.storageGet(this.KEY_VIBRATION) as boolean ?? true;
  }

  async getDisplay() {
    return this.display ?? await this.storageGet(this.KEY_DISPLAY) as boolean ?? true;
  }

  setGPS(isOn: boolean) {
    this.gps = isOn;
    this.storageSet(this.KEY_GPS, isOn);
  }

  setVolume(level: number) {
    if (isNaN(level)) { return; }
    this.volume = level;
    this.storageSet(this.KEY_VOLUME, level);
  }

  setVibration(isOn: boolean) {
    this.vibration = isOn;
    this.storageSet(this.KEY_VIBRATION, isOn);
  }

  setDisplay(keepOn: boolean) {
    this.display = keepOn;
    this.storageSet(this.KEY_DISPLAY, keepOn);
  }

  private async storageGet(key: string) {
    return await this.storage.get(key);
  }

  private async storageSet(key: string, value: any) {
    await this.storage.set(key, value);
  }
}
