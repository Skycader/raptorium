import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './layouts/root/root.component';
import { RouterModule } from '@angular/router';
import { BattlegroundModule } from '../battleground/battleground.module';

@NgModule({
  declarations: [RootComponent],
  imports: [
    CommonModule,
    BattlegroundModule,
    RouterModule.forChild([
      {
        path: '',
        component: RootComponent,
      },
    ]),
  ],
})
export class MainModule { }
