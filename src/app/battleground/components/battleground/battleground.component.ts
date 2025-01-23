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
  public level: number = 1;
  public experience: number = 0;
  constructor(public bt: BattlegroundService) {}
  ngOnInit() {
    (Array.prototype as any).random = function () {
      return this[Math.floor(Math.random() * this.length)];
    };
    this.level = Number(localStorage.getItem('level')) || 1;
    this.experience = Number(localStorage.getItem('experience')) || 0;
    let lvl = this.level > 4 ? 4 : this.level;
    this.level = lvl;
    localStorage.setItem('level', lvl.toString());
    console.log('setting', lvl);

    this.bt.setDifficulty(lvl);
    this.start();
  }
  public start() {
    localStorage.setItem('level', this.level.toString());
    localStorage.setItem('experience', this.experience.toString());
    this.bt.render();

    setTimeout(() => {
      if (this.bt.solution === '') {
        console.warn('error detected', this.bt.task);
        this.start();
      }

      if (this.bt.task.length > 100) {
        console.warn('error detected', this.bt.task);
        this.start();
      }

      this.currentDaemonConfig = this.generateDaemon(
        this.bt.task,
        this.bt.solution,
        this.level,
      );

      if (this.currentDaemonConfig === undefined) {
        console.warn('error detected', this.bt.task);

        this.start();
      }
    });
  }

  public currentDaemonConfig!: CardConfigInterface;

  public difficultyLevels = [
    'assets/images/daemons/1.jpg',
    'assets/images/daemons/2.jpg',
    'assets/images/daemons/3.jpeg',
    'assets/images/daemons/4.jpg',
    'assets/images/daemons/5.jpeg',
  ];
  public generateDaemon(title: string, solution: string, level: number) {
    const pic = (this.difficultyLevels as any).random();
    let difficulty = this.level;
    if (difficulty > 5) difficulty = 5;

    if (this.level > 4) this.level = 4;
    this.bt.setDifficulty(difficulty);
    return {
      title,
      subheader: level + ' level daemon',
      avatarSrc: pic,
      backgroundSrc: pic,
      description: '',
      solution,
    };
  }

  public blocked: boolean = false;
  public checkStatus(event: Boolean) {
    if (this.blocked) return;
    this.blocked = true;
    if (event === true) {
      this.experience += this.bt.difficulty * 10;

      if (this.experience + this.bt.difficulty > 100) {
        this.level += 1;
        this.experience = 0;
      }
    } else {
      this.daemonDo = 'reboot';
      this.experience -= this.bt.difficulty * 10;
      if (this.experience < 0) {
        this.experience = 0;
        this.level--;
        if (this.level < 0) this.level = 0;
      }
    }

    this.daemonDo = 'reboot';
    setTimeout(() => {
      this.start();
    }, 1000);
    setTimeout(() => {
      this.daemonDo = '';
      this.blocked = false;
    }, 3000);
  }

  public daemonDo: string = '';
}
