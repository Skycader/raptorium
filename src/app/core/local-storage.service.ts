import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  public isBrowser: boolean = false;
  constructor(@Inject(PLATFORM_ID) private platformId: string) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  public getItem(key: string) {
    if (this.isBrowser) {
      const item = localStorage.getItem(key);
      if (!item) return null;
      if (this.isJson(item)) return JSON.parse(item);
      return item;
    } else {
      return null;
    }
  }

  public setItem(key: string, data: any) {
    if (this.isBrowser) {
      if (data instanceof Object) {
        localStorage.setItem(key, JSON.stringify(data));
      } else {
        localStorage.setItem(key, data);
      }
    }
  }

  public removeItem(key: string) {
    if (this.isBrowser) {
      localStorage.removeItem(key);
    }
  }

  public isJson(string: string | null) {
    if (!string) return false;
    try {
      JSON.parse(string);
    } catch (e) {
      return false;
    }
    return true;
  }
}
