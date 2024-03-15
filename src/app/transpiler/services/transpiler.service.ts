import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TranspilerService {
  constructor() {
    (Array.prototype as any).random = function () {
      return this[Math.floor(Math.random() * this.length)];
    };
  }

  public transpile(input: string, dict: any) {
    let result = input;
    while (result.includes('{{')) {
      result = this.process(result, dict);
    }

    return result;
  }

  private process(input: string, dinctionary: any): string {
    const entries = Object.entries(dinctionary);

    for (let entry of entries) {
      if (input.includes(entry[0])) return this.render(input, entry);
    }

    return input;
  }

  private render(input: string, dictEntry: any) {
    return input.replace(dictEntry[0], dictEntry[1].random());
  }
}
