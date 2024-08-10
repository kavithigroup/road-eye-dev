import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliceVehicleFootageComponent } from './police-vehicle-footage.component';

describe('PoliceVehicleFootageComponent', () => {
  let component: PoliceVehicleFootageComponent;
  let fixture: ComponentFixture<PoliceVehicleFootageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoliceVehicleFootageComponent]
    });
    fixture = TestBed.createComponent(PoliceVehicleFootageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
