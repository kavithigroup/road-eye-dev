import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliceLocationHistoryComponent } from './police-location-history.component';

describe('PoliceLocationHistoryComponent', () => {
  let component: PoliceLocationHistoryComponent;
  let fixture: ComponentFixture<PoliceLocationHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoliceLocationHistoryComponent]
    });
    fixture = TestBed.createComponent(PoliceLocationHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
