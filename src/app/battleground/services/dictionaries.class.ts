export class Dictionaries {
  public vars = {
    0: 'false',
    1: 'true',
    2: "'string'",
    3: "'str123b'",
    4: "' 1 '",
    5: '[]',
    6: '[1,2]',
    7: 'null',
    8: 'undefined',
    9: '{}',
    10: '!',
    11: '2',
    12: '4',
    13: '0',
    14: '[1]',
    15: "'true'",
    16: "'false'",
    17: 'new Date(0)',
    18: '3.14',
    19: 'Infinity',
    20: '-Infinity',
    21: '{name: "John"}',
    22: 'new Array(1)[0]',
  };

  public oprs = {
    0: '+',
    1: '-',
    2: '*',
    3: '/',
    4: '==',
    5: '>',
    6: '<',
    7: '||',
    8: '&&',
    9: '===',
  };

  public mods = {
    0: '',
    1: '+',
    2: ' + ',
    3: '!',
    4: '!!',
    5: 'typeof ',
  };

  public func = {
    0: 'Number',
    1: 'Boolean',
    2: 'String',
  };

  public eventLoop = {
    0: 'new Promise((resolve,reject) => { {{body}} }).then({{body}})',
    1: 'setTimeout(() => { {{body}},0)',
  };

  public promiseBody = {
    0: 'resolve(6)',
  };

  public promiseThen = {
    0: '(result) => console.log(result)',
  };
}
