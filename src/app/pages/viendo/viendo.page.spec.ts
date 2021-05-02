import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViendoPage } from './viendo.page';

describe('ViendoPage', () => {
  let component: ViendoPage;
  let fixture: ComponentFixture<ViendoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViendoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViendoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
