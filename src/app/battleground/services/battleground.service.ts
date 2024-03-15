import { Injectable } from '@angular/core';
import { Dictionaries } from './dictionaries.class';
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
  constructor(private transliper: TranspilerService) {}
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

  private dict: any = {
    1: `typeof {{option}}`,
    2: `{{prefix}}{{option}}{{operator}}{{prefix}}{{option}}`,
    3: `{{func}}({{option}})`,
    4: `{{prefix}}{{option}}{{operator}}{{prefix}}{{option}}{{operator}}{{prefix}}{{option}}`,
    5: `{{prefix}}{{option}}{{operator}}{{prefix}}{{func}}({{option}}){{operator}}{{prefix}}{{option}}{{operator}}{{prefix}}{{option}}`,
    6: `{{prefix}}{{option}}{{operator}}{{prefix}}{{func}}({{option}}){{operator}}{{prefix}}{{option}}{{operator}}{{prefix}}{{option}}{{prefix}}{{option}}{{operator}}{{prefix}}{{func}}({{option}}){{operator}}{{prefix}}{{option}}{{operator}}{{prefix}}{{option}}`,
  };

  private dict2: any = {
    '{{option}}': () => this.take.bind(this, this.ds.vars),
    '{{prefix}}': () => this.take.bind(this, this.ds.mods),
    '{{operator}}': () => this.take.bind(this, this.ds.oprs),
    '{{func}}': () => this.take.bind(this, this.ds.func),
  };

  public readSentence(sentence: string) {
    console.log(sentence);
    let task = sentence
      .replaceAll('{{option}}', this.dict2['{{option}}']())
      .replaceAll('{{prefix}}', this.dict2['{{prefix}}']())
      .replaceAll('{{operator}}', this.dict2['{{operator}}']())
      .replaceAll('{{func}}', this.dict2['{{func}}']());
    return task;
  }

  public randomIntFromInterval(min: number, max: number) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  public render() {
    /*this.task = this.readSentence(this.dict[this.difficulty]);
    try {
      this.solution = this.parse(this.task);
      if (this.solution.length > 15) this.render();
    } catch (e) {
      this.render();
    }

    */

    try {
      let a = this.transliper.transpile('{{start}}', this.mainDictionary);

      prettier
        .format(a, {
          parser: 'babel',
          plugins: [parserBabel, prettierPluginEstree],
        })
        .then((res: any) => {
          this.solution = this.parse(res);
          (window as any).solution = this.solution;
          this.task = res;
        });
    } catch (e) {
      this.render();
    }
  }
}
