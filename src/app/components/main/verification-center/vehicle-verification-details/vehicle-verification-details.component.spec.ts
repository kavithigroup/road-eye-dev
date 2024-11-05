import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleVerificationDetailsComponent } from './vehicle-verification-details.component';

describe('VehicleVerificationDetailsComponent', () => {
  let component: VehicleVerificationDetailsComponent;
  let fixture: ComponentFixture<VehicleVerificationDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehicleVerificationDetailsComponent]
    });
    fixture = TestBed.createComponent(VehicleVerificationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
