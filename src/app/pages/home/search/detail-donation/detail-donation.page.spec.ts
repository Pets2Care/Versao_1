import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailDonationPage } from './detail-donation.page';

describe('DetailDonationPage', () => {
  let component: DetailDonationPage;
  let fixture: ComponentFixture<DetailDonationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DetailDonationPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailDonationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
