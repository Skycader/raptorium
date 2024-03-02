import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaemonComponent } from './daemon.component';

describe('DaemonComponent', () => {
  let component: DaemonComponent;
  let fixture: ComponentFixture<DaemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DaemonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DaemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
