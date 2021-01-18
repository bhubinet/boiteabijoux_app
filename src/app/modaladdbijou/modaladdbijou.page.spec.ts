import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModaladdbijouPage } from './modaladdbijou.page';

describe('ModaladdbijouPage', () => {
  let component: ModaladdbijouPage;
  let fixture: ComponentFixture<ModaladdbijouPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModaladdbijouPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModaladdbijouPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
