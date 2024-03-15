export class MainDictionaryClass {
  public dictionary = {
    '{{start}}': ['{{eventLoop}}', '{{implicit1}}', '{{implicit2}}'],
    '{{eventLoop}}': ['{{setTimeout}}', '{{promise}}', '{{eventLoop}}'],
    '{{promise}}': [
      'new Promise((resolve, reject) => { {{promiseBody}}}).then({{promiseThen}})',
      'console.log({{implicitBody}}); {{eventLoop}};',
      'console.log({{implicitBody}}); {{eventLoop}}; {{eventLoop}}',
    ],
    '{{promiseBody}}': [
      'resolve({{implicitBody}})',
      'console.warn({{implicitBody}})',
      '{{setTimeout}}',
      '{{promise}}',
    ],
    '{{promiseThen}}': [
      '(result) => console.warn(result)',
      '{{setTimeout}}',
      '{{promise}}',
    ],
    '{{setTimeout}}': ['setTimeout(()=>{{setTimeoutBody}},0)'],
    '{{setTimeoutBody}}': ['console.warn({{implicitBody}})'],
    '{{implicit1}}': ['typeof {{implicitBody}}'],
    '{{implicitBody}}': [
      '3.14',
      '{a:0}',
      'true',
      'false',
      'undefined',
      'null',
      '0',
      '{}',
      '"skycader"',
    ],

    '{{implicit2}}': [
      '{{prefix}}{{implicitBody}}{{operator}}{{prefix}}{{implicitBody}}',
    ],
    '{{prefix}}': ['+', '!!', '!', '-', ' + ', '', 'typeof '],
    '{{operator}}': ['+', '-', '*', '/'],
  };
}
