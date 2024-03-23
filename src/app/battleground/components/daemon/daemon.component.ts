import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardConfigInterface } from '../../models/cardConfig.interface';

@Component({
  selector: 'app-daemon',
  templateUrl: './daemon.component.html',
  styleUrl: './daemon.component.scss',
})
export class DaemonComponent {
  @Output() status: EventEmitter<boolean> = new EventEmitter();
  @Input() config: CardConfigInterface = {
    title: 'Мощение дорожек и площадок',
    subheader: '40 level daemon',
    avatarSrc:
      'https://d2y6mqrpjbqoe6.cloudfront.net/image/upload/f_auto,q_auto/cdn1/movies-pictures/0f8d390c-e0a9-4f20-a43d-f4e71df618d9.jpg',
    backgroundSrc:
      'https://d2y6mqrpjbqoe6.cloudfront.net/image/upload/f_auto,q_auto/cdn1/movies-pictures/0f8d390c-e0a9-4f20-a43d-f4e71df618d9.jpg',

    description: '',
    solution: '',
  };

  ngOnInit() {}

  public input: string = '';
  public blocked = false;
  public checkForCorrectAnswer(event: any) {
    if (this.blocked) return;
    this.blocked = true;
    if (
      event.target.value.toLowerCase() ===
      this.config.solution.toString().toLowerCase()
    ) {
      this.status.emit(true);
      this.input = '';
    } else {
      alert('Wrong, correct answer is ' + this.config.solution);
      //this.status.emit(false);
      //this.input = '';
    }

    setTimeout(() => {
      this.blocked = false;
    }, 2000);
  }
}
