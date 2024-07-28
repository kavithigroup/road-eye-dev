import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewComplainComponent } from './new-complain.component';

describe('NewComplainComponent', () => {
  let component: NewComplainComponent;
  let fixture: ComponentFixture<NewComplainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewComplainComponent]
    });
    fixture = TestBed.createComponent(NewComplainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
