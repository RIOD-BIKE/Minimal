import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapSlideInBottomComponent } from './map-slide-in-bottom.component';

describe('MapSlideInBottomComponent', () => {
  let component: MapSlideInBottomComponent;
  let fixture: ComponentFixture<MapSlideInBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapSlideInBottomComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MapSlideInBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
