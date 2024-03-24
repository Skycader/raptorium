import { Injectable } from '@angular/core';
import { TranspilerService } from '../../transpiler/services/transpiler.service';
import { MainDictionaryClass } from './main.dictionary';
import * as prettier from 'prettier';
import parserBabel from 'prettier/plugins/babel';
import * as prettierPluginEstree from 'prettier/plugins/estree';

@Injectable({
  providedIn: 'root',
})
export class BattlegroundService {
  public task: string = '';
  public solution: string = '';
  public difficulty: number = 1;
  public mainDictionary = new MainDictionaryClass().dictionary;
  constructor(private transliper: TranspilerService) { }
  public setDifficulty(num: number) {
    this.difficulty = num;
  }

  public parse(str: string) {
    return new Function('', `return ${str}`)();
  }

  public take(obj: any) {
    let ok = Object.keys(obj).length;
    let rk = Math.floor(Math.random() * ok);
    return obj[rk];
  }

  public randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  public render() {
    let formattedTask = this.transliper.transpile(
      `{{level${this.difficulty}}}`,
      this.mainDictionary,
    );

    try {
      this.parse(formattedTask);
    } catch (e) {
      this.render();
      return;
    }

    prettier
      .format(formattedTask, {
        printWidth: 50,
        parser: 'babel',
        plugins: [parserBabel, prettierPluginEstree],
      })
      .then((res: string) => {
        this.solution = this.parse(res);
        this.task = res;
      });
  }
}
