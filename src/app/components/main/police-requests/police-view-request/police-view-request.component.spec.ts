import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliceViewRequestComponent } from './police-view-request.component';

describe('PoliceViewRequestComponent', () => {
  let component: PoliceViewRequestComponent;
  let fixture: ComponentFixture<PoliceViewRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoliceViewRequestComponent]
    });
    fixture = TestBed.createComponent(PoliceViewRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
