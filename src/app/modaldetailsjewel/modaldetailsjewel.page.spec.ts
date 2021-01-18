import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModaldetailsjewelPage } from './modaldetailsjewel.page';

describe('ModaldetailsjewelPage', () => {
  let component: ModaldetailsjewelPage;
  let fixture: ComponentFixture<ModaldetailsjewelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModaldetailsjewelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModaldetailsjewelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
