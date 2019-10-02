// call 함수
// 함수와 값들을 매개변수로 받아 함수에 값들을 넣어 실행시키는 함수입니다.

import { curry } from './curry';
import { add } from './add';

const call = (f: Function, ...args): Function => {
  return f(...args);
};

console.log(call(add, 2, 5)); // 7

console.log(curry(add)(1)('5'));  // '15'
console.log(curry(add)('a')('b'));  // 'ab'
console.log(curry(add)(14)(5));  // 19
console.log(curry(add)(7)(29));  // 36