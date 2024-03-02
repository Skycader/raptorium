import { Component, HostListener } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';
import { map, of, switchMap, timer } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ThemeService } from '../../services/theme.service';

export interface Section {
  name: string;
}

export interface ArdonNavList {
  topic: ArdonNavTopic[];
  articles: ArdonNavArticle[];
}

export interface ArdonNavTopic {
  name: string;
}
export interface ArdonNavArticle {
  name: string;
  route: string;
}

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
})
export class SideNavComponent {
  public lists: ArdonNavList[] = [
    {
      topic: [
        {
          name: 'Основная',
        },
      ],
      articles: [
        {
          name: 'О нас',
          route: 'about',
        },
      ],
    },
    {
      topic: [
        {
          name: 'Услуги',
        },
      ],
      articles: [
        {
          name: 'Мощение дорожек и площадок',
          route: 'moshchenie-dorozhek',
        },
        {
          name: 'Дренаж и система водоотведения',
          route: 'drenazh-i-sistema-vodootvedeniya',
        },
      ],
    },
  ];

  public get isSideNav() {
    return this.navbarService.isSideNav;
  }

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(
    event: KeyboardEvent,
  ) {
    this.closeSideNav();
  }

  constructor(
    private navbarService: NavbarService,
    public readonly themeService: ThemeService,
  ) { }

  public closeSideNav() {
    this.navbarService.closeSideNav();
  }

  public toggleTheme() {
    this.themeService.toggleTheme();
  }
}
