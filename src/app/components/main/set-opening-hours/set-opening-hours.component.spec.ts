import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetOpeningHoursComponent } from './set-opening-hours.component';

describe('SetOpeningHoursComponent', () => {
  let component: SetOpeningHoursComponent;
  let fixture: ComponentFixture<SetOpeningHoursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetOpeningHoursComponent]
    });
    fixture = TestBed.createComponent(SetOpeningHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
