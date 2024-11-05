import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserVerificationDetailsComponent } from './user-verification-details.component';

describe('UserVerificationDetailsComponent', () => {
  let component: UserVerificationDetailsComponent;
  let fixture: ComponentFixture<UserVerificationDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserVerificationDetailsComponent]
    });
    fixture = TestBed.createComponent(UserVerificationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
