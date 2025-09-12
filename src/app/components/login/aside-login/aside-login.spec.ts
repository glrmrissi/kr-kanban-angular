import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideLogin } from './aside-login';

describe('AsideLogin', () => {
  let component: AsideLogin;
  let fixture: ComponentFixture<AsideLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsideLogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsideLogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
