import { Component } from '@angular/core';
import { ThemeService } from './common/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Raptorium';
  constructor(private themeService: ThemeService) { }
}
