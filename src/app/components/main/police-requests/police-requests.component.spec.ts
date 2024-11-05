import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliceRequestsComponent } from './police-requests.component';

describe('PoliceRequestsComponent', () => {
  let component: PoliceRequestsComponent;
  let fixture: ComponentFixture<PoliceRequestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoliceRequestsComponent]
    });
    fixture = TestBed.createComponent(PoliceRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
