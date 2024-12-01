import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestDetailsPopupComponent } from './request-details-popup.component';

describe('RequestDetailsPopupComponent', () => {
  let component: RequestDetailsPopupComponent;
  let fixture: ComponentFixture<RequestDetailsPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestDetailsPopupComponent]
    });
    fixture = TestBed.createComponent(RequestDetailsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
