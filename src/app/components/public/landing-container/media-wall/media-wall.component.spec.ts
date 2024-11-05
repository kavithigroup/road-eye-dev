import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaWallComponent } from './media-wall.component';

describe('MediaWallComponent', () => {
  let component: MediaWallComponent;
  let fixture: ComponentFixture<MediaWallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MediaWallComponent]
    });
    fixture = TestBed.createComponent(MediaWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
