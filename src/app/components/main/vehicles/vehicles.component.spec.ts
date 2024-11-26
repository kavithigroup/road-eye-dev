import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesComponent } from './vehicles.component';

describe('VehiclesComponent', () => {
  let component: VehiclesComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehiclesComponent]
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
