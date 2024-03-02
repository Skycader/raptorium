import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattlegroundComponent } from './battleground.component';

describe('BattlegroundComponent', () => {
  let component: BattlegroundComponent;
  let fixture: ComponentFixture<BattlegroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BattlegroundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BattlegroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
