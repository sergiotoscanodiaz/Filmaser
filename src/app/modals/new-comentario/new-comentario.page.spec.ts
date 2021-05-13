import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewComentarioPage } from './new-comentario.page';

describe('NewComentarioPage', () => {
  let component: NewComentarioPage;
  let fixture: ComponentFixture<NewComentarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewComentarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewComentarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
