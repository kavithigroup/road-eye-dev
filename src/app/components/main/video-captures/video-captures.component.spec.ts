import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCapturesComponent } from './video-captures.component';

describe('VideoCapturesComponent', () => {
  let component: VideoCapturesComponent;
  let fixture: ComponentFixture<VideoCapturesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoCapturesComponent]
    });
    fixture = TestBed.createComponent(VideoCapturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
