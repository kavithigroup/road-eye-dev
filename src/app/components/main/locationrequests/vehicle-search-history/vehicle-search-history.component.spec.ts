import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleSearchHistoryComponent } from './vehicle-search-history.component';

describe('VehicleSearchHistoryComponent', () => {
  let component: VehicleSearchHistoryComponent;
  let fixture: ComponentFixture<VehicleSearchHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehicleSearchHistoryComponent]
    });
    fixture = TestBed.createComponent(VehicleSearchHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
