import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonLoginRegisterComponent } from './button-login-register.component';

describe('ButtonLoginRegisterComponent', () => {
  let component: ButtonLoginRegisterComponent;
  let fixture: ComponentFixture<ButtonLoginRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonLoginRegisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonLoginRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
