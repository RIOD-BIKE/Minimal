import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RouterStartComponent } from './router-start.component';

describe('RouterStartComponent', () => {
  let component: RouterStartComponent;
  let fixture: ComponentFixture<RouterStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterStartComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RouterStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
