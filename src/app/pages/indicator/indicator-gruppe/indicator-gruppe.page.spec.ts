import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IndicatorGruppePage } from './indicator-gruppe.page';

describe('IndicatorGruppePage', () => {
  let component: IndicatorGruppePage;
  let fixture: ComponentFixture<IndicatorGruppePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicatorGruppePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IndicatorGruppePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
