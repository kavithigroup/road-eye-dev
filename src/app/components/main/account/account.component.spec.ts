import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountComponent } from './account.component';

describe('AccountComponent', () => {
  let component: AccountComponent;
  let fixture: ComponentFixture<AccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountComponent]
    });
    fixture = TestBed.createComponent(AccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  // comment
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
