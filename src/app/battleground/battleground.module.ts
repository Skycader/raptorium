import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BattlegroundComponent } from './components/battleground/battleground.component';
import { MaterialModule } from '../material/material.module';
import { DaemonComponent } from './components/daemon/daemon.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [BattlegroundComponent, DaemonComponent],
      imports: [CommonModule, FormsModule,  MaterialModule],
  exports: [BattlegroundComponent],
})
export class BattlegroundModule {}
