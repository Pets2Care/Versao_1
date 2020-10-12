import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserLogoutPage } from './user-logout.page';

describe('UserLogoutPage', () => {
  let component: UserLogoutPage;
  let fixture: ComponentFixture<UserLogoutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLogoutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserLogoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
