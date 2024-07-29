import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationrequestsComponent } from './locationrequests.component';

describe('LocationrequestsComponent', () => {
  let component: LocationrequestsComponent;
  let fixture: ComponentFixture<LocationrequestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationrequestsComponent]
    });
    fixture = TestBed.createComponent(LocationrequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
