import { Component } from '@angular/core';
import { BattlegroundService } from '../../services/battleground.service';
import { CardConfigInterface } from '../../models/cardConfig.interface';
import { Observable, delay, interval, of, tap } from 'rxjs';

@Component({
  selector: 'app-battleground',
  templateUrl: './battleground.component.html',
  styleUrl: './battleground.component.scss',
})
export class BattlegroundComponent {
  constructor(public bt: BattlegroundService) { }

  public start() {
    this.bt.render();
    this.currentDaemonConfig = this.generateDaemon(
      this.bt.task,
      this.bt.solution,
    );
  }

  public currentDaemonConfig!: CardConfigInterface;

  public generateDaemon(title: string, solution: string) {
    return {
      title,
      subheader: '40 level daemon',
      avatarSrc: 'https://www.kino-teatr.ru/video/27135/start.jpg',
      backgroundSrc: 'https://www.kino-teatr.ru/video/27135/start.jpg',

      description: '',
      solution,
    };
  }

  public checkStatus(event: Boolean) {
    console.log(event);
    if (event === true) {
      this.daemonDo = 'reboot';
      setTimeout(() => {
        this.start();
      }, 1000);
      setTimeout(() => {
        this.daemonDo = '';
      }, 3000);
    } else {
      alert('Wrong');
    }
  }

  public daemonDo: string = '';
}
