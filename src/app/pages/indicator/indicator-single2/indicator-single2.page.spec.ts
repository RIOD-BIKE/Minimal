import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IndicatorSingle2Page } from './indicator-single2.page';

describe('IndicatorSingle2Page', () => {
  let component: IndicatorSingle2Page;
  let fixture: ComponentFixture<IndicatorSingle2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicatorSingle2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IndicatorSingle2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
