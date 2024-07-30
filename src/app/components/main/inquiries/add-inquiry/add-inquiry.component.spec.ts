import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInquiryComponent } from './add-inquiry.component';

describe('AddInquiryComponent', () => {
  let component: AddInquiryComponent;
  let fixture: ComponentFixture<AddInquiryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddInquiryComponent]
    });
    fixture = TestBed.createComponent(AddInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
