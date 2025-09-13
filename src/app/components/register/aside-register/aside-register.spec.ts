import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideRegister } from './aside-register';

describe('AsideRegister', () => {
  let component: AsideRegister;
  let fixture: ComponentFixture<AsideRegister>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsideRegister]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsideRegister);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
