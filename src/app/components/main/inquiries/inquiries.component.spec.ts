import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InquiryComponent } from './inquiries.component';

describe('InquiriesComponent', () => {
  let component: InquiryComponent;
  let fixture: ComponentFixture<InquiryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InquiryComponent]
    });
    fixture = TestBed.createComponent(InquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
