import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoporateDashboardComponent } from './coporate-dashboard.component';

describe('CoporateDashboardComponent', () => {
  let component: CoporateDashboardComponent;
  let fixture: ComponentFixture<CoporateDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoporateDashboardComponent]
    });
    fixture = TestBed.createComponent(CoporateDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
