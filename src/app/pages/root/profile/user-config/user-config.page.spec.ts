import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserConfigPage } from './user-config.page';

describe('UserConfigPage', () => {
  let component: UserConfigPage;
  let fixture: ComponentFixture<UserConfigPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserConfigPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserConfigPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
