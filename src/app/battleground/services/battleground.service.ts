import { Injectable } from '@angular/core';
import { Dictionaries } from './dictionaries.class';

@Injectable({
  providedIn: 'root',
})
export class BattlegroundService {
  public task: string = '';
  public solution: string = '';
  public difficulty: number = 1;

  public setDifficulty(num: number) {
    this.difficulty = num;
  }
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
    2: () =>
      `${this.take(this.ds.mods)}${this.take(this.ds.vars)}${this.take(
        this.ds.oprs,
      )}${this.take(this.ds.mods)}${this.take(this.ds.vars)}`,
    3: () => `${this.take(this.ds.func)}(${this.take(this.ds.vars)})`,
    4: () =>
      `${this.take(this.ds.mods)}${this.take(this.ds.vars)}${this.take(
        this.ds.oprs,
      )}${this.take(this.ds.mods)}${this.take(this.ds.vars)}${this.take(
        this.ds.oprs,
      )}${this.take(this.ds.mods)}${this.take(this.ds.vars)}`,
    5: () =>
      `${this.take(this.ds.mods)}${this.take(this.ds.vars)}${this.take(
        this.ds.oprs,
      )}${this.take(this.ds.mods)}${this.take(this.ds.vars)}${this.take(
        this.ds.oprs,
      )}${this.take(this.ds.mods)}${this.take(this.ds.vars)}${this.take(
        this.ds.oprs,
      )}${this.take(this.ds.mods)}${this.take(this.ds.vars)}`,
  };

  public randomIntFromInterval(min: number, max: number) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  public render() {
    this.task = this.dict[this.difficulty]();
    try {
      this.solution = this.parse(this.task);
      if (this.solution.length > 15) this.render();
    } catch (e) {
      this.render();
    }
  }
}
