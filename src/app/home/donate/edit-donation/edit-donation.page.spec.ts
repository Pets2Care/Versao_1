import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditDonationPage } from './edit-donation.page';

describe('EditDonationPage', () => {
  let component: EditDonationPage;
  let fixture: ComponentFixture<EditDonationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDonationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditDonationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
