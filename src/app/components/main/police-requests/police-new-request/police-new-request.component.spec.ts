import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliceNewRequestComponent } from './police-new-request.component';

describe('PoliceNewRequestComponent', () => {
  let component: PoliceNewRequestComponent;
  let fixture: ComponentFixture<PoliceNewRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoliceNewRequestComponent]
    });
    fixture = TestBed.createComponent(PoliceNewRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
