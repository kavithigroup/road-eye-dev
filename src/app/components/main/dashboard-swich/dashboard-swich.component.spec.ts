import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSwichComponent } from './dashboard-swich.component';

describe('DashboardSwichComponent', () => {
  let component: DashboardSwichComponent;
  let fixture: ComponentFixture<DashboardSwichComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardSwichComponent]
    });
    fixture = TestBed.createComponent(DashboardSwichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
