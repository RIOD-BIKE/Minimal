import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SettingsMainDropboxPage } from './settings-main-dropbox.page';

describe('SettingsMainDropboxPage', () => {
  let component: SettingsMainDropboxPage;
  let fixture: ComponentFixture<SettingsMainDropboxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsMainDropboxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SettingsMainDropboxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
