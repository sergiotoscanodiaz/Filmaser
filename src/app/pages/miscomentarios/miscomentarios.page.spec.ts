import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MiscomentariosPage } from './miscomentarios.page';

describe('MiscomentariosPage', () => {
  let component: MiscomentariosPage;
  let fixture: ComponentFixture<MiscomentariosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiscomentariosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MiscomentariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
