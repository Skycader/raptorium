export class MainDictionaryClass {
  public dictionary = {
    '{{start}}': [
      '{{implicit1}}',
      '{{implicit2}}',
      '{{implicit3}}',
      '{{implicit4}}',
    ], //'{{eventLoop}}',
    '{{level1}}': ['{{implicit1}}'],
    '{{level2}}': ['{{implicit2}}'],
    '{{level3}}': ['{{implicit3}}'],
    '{{level4}}': ['{{implicit4}}'],
    '{{eventLoop}}': ['{{setTimeout}}', '{{promise}}', '{{eventLoop}}'],
    '{{promise}}': [
      'new Promise((resolve, reject) => { {{promiseBody}}}).then({{promiseThen}})',
      'console.log({{value}}); {{eventLoop}};',
      'console.log({{value}}); {{eventLoop}}; {{eventLoop}}',
    ],
    '{{promiseBody}}': [
      'resolve({{value}})',
      'console.log({{value}})',
      '{{setTimeout}}',
      '{{promise}}',
    ],
    '{{promiseThen}}': [
      '(result) => console.log(result)',
      '{{setTimeout}}',
      '{{promise}}',
    ],
    '{{setTimeout}}': ['setTimeout(()=>{{setTimeoutBody}},0)'],
    '{{setTimeoutBody}}': ['console.log({{value}})'],
    '{{implicit1}}': ['typeof {{value}}', '{{func}}({{value}})'],
    '{{value}}': [
      '3.14',
      '{a:0}',
      '[1,2]',
      '[]',
      'new Array(5)',
      'true',
      'false',
      'undefined',
      'null',
      '0',
      '{}',
      '"str"',
      'new Date()',
    ],

    '{{implicit2}}': [
      '{{prefix}}{{value}}{{operator}}{{prefix}}{{value}}',
      '{{func}}({{prefix}}{{value}}{{operator}}{{prefix}}{{value}})',
    ],

    '{{implicit3}}': [
      '{{prefix}}{{value}}{{operator}}{{prefix}}{{value}}{{operator}}{{prefix}}{{value}}',
      '{{func}}({{prefix}}{{value}}{{operator}}{{prefix}}{{value}}{{operator}}{{prefix}}{{value}})',
    ],

    '{{implicit4}}': [
      '{{prefix}}{{value}}{{operator}}{{prefix}}{{func}}({{value}}){{operator}}{{prefix}}{{value}}{{operator}}{{prefix}}{{value}}',
      '{{func}}({{prefix}}{{value}}{{operator}}{{prefix}}{{func}}({{value}}){{operator}}{{prefix}}{{value}}{{operator}}{{prefix}}{{value}})',
    ],

    '{{prefix}}': ['+', '!!', '!', '-', ' + ', '', 'typeof '],
    '{{operator}}': ['+', '-', '*', '/', '&&', '||'],
    '{{func}}': ['Number', 'Boolean', 'String'],
  };
}
