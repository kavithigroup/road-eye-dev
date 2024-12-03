import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliceComplainsComponent } from './police-complains.component';

describe('PoliceComplainsComponent', () => {
  let component: PoliceComplainsComponent;
  let fixture: ComponentFixture<PoliceComplainsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoliceComplainsComponent]
    });
    fixture = TestBed.createComponent(PoliceComplainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
