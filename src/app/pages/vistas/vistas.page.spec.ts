import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VistasPage } from './vistas.page';

describe('VistasPage', () => {
  let component: VistasPage;
  let fixture: ComponentFixture<VistasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VistasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
