import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewDonationPage } from './new-donation.page';

describe('NewDonationPage', () => {
  let component: NewDonationPage;
  let fixture: ComponentFixture<NewDonationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewDonationPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(NewDonationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
