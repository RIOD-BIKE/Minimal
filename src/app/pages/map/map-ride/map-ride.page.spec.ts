import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapRidePage } from './map-ride.page';

describe('MapRidePage', () => {
  let component: MapRidePage;
  let fixture: ComponentFixture<MapRidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapRidePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MapRidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
