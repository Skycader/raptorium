import { Injectable } from '@angular/core';
import { Dictionaries } from './dictionaries.class';

@Injectable({
  providedIn: 'root',
})
export class BattlegroundService {
  public task: string = '';
  public solution: string = '';
  public difficulty: number = 1;

  private ds = new Dictionaries();

  public parse(str: string) {
    return new Function('', `return ${str}`)();
  }

  public take(obj: any) {
    let ok = Object.keys(obj).length;
    let rk = Math.floor(Math.random() * ok);
    return obj[rk];
  }

  /**
   * 1: `typeof {{option}}`
   * 30: {{prefix}} {{option}} {{operator}} {{prefix}} {{option}}
   * */

  private dict: any = {
    1: () => `typeof ${this.take(this.ds.vars)}`,
    30: () =>
      `${this.take(this.ds.mods)}${this.take(this.ds.vars)}${this.take(
        this.ds.oprs,
      )}${this.take(this.ds.mods)}${this.take(this.ds.vars)}`,
    50: () => `${this.take(this.ds.func)}(${this.take(this.ds.vars)})`,
    70: () =>
      `${this.take(this.ds.mods)}${this.take(this.ds.vars)}${this.take(
        this.ds.oprs,
      )}${this.take(this.ds.mods)}${this.take(this.ds.vars)}${this.take(
        this.ds.oprs,
      )}${this.take(this.ds.mods)}${this.take(this.ds.vars)}`,
    80: () =>
      `${this.take(this.ds.mods)}${this.take(this.ds.vars)}${this.take(
        this.ds.oprs,
      )}${this.take(this.ds.mods)}${this.take(this.ds.vars)}${this.take(
        this.ds.oprs,
      )}${this.take(this.ds.mods)}${this.take(this.ds.vars)}${this.take(
        this.ds.oprs,
      )}${this.take(this.ds.mods)}${this.take(this.ds.vars)}`,
  };

  public render() {
    this.task = this.dict[this.difficulty]();
    try {
      this.solution = this.parse(this.task);
    } catch (e) {
      this.render();
    }
  }
}
