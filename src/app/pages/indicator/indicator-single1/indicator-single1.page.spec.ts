import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IndicatorSingle1Page } from './indicator-single1.page';

describe('IndicatorSingle1Page', () => {
  let component: IndicatorSingle1Page;
  let fixture: ComponentFixture<IndicatorSingle1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicatorSingle1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IndicatorSingle1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
