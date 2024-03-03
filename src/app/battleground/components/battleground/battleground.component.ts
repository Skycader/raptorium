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
  constructor(public bt: BattlegroundService) { }
  ngOnInit() {
    (Array.prototype as any).random = function() {
      return this[Math.floor(Math.random() * this.length)];
    };
    this.level = Number(localStorage.getItem('level')) || 1;
    this.experience = Number(localStorage.getItem('experience')) || 0;
    let lvl = this.level > 5 ? 5 : this.level;
    this.bt.setDifficulty(lvl);
    this.start();
  }
  public start() {
    localStorage.setItem('level', this.level.toString());
    localStorage.setItem('experience', this.experience.toString());
    this.bt.render();
    this.currentDaemonConfig = this.generateDaemon(
      this.bt.task,
      this.bt.solution,
      this.level,
    );
  }

  public currentDaemonConfig!: CardConfigInterface;

  public difficultyLevels = [
    'https://www.kino-teatr.ru/video/27135/start.jpg',
    'https://www.film.ru/sites/default/files/filefield_paths/demon-slayer-1q.jpg',
    'https://2datyvyhoda.ru/wp-content/uploads/2023/04/Demon-Slayer-Swordsmith-Village-Arc-2023-S3-E1-4.jpg',
    'https://avatars.dzeninfra.ru/get-zen_doc/1654267/pub_5d80ea0bfc69ab00ae919bda_5d80eeeb9c944600ad98c47f/scale_1200',
    'https://agor.pw/img/kimetsu-no-yaiba-katanakaji-no-sato-hen/2.jpg',
  ];
  public generateDaemon(title: string, solution: string, level: number) {
    const pic = (this.difficultyLevels as any).random();
    let difficulty = this.level;
    if (difficulty > 5) difficulty = 5;
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
    console.log(event);
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
