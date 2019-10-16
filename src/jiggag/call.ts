// call 함수
// 함수와 값들을 매개변수로 받아 함수에 값들을 넣어 실행시키는 함수입니다.

import { curry } from './curry';
import { add } from './add';

function call<T> (f: Function, ...args: T[]): Function {
  return f(...args);
};

console.log(call(add, 2, 5)); // 7

console.log(curry(add)(1)('5'));  // '15'
console.log(curry(add)('a')('b'));  // 'ab'
console.log(curry(add)(14)(5));  // 19
console.log(curry(add)(7)(29));  // 36

/**
 * const call = (fn, ...args) => fn(...args);
 *    함수(fn)와 인자(...args)를 받아서 함수에 인자를 전달하여 fn(...args) 실행
 *    함수(fn)의 필요 인자보다 부족한 인자를 (...args) 전달한 경우 해당 인자를 Undefined로 처리하여 함수가 실행됨
 * 
 * const curry = fn => ...args => fn(...args)
 *    함수(fn)과 인자(...args)를 받아서 각각의 인자를 1개씩 넘겨주는 함수를 생성
 *    필요 인자보다 적은 경우 해당 인자를 필요로 하는 함수가 리턴됨
 *  */

console.log(curry(add)(1));  // function
console.log(curry(add)(1)(2));  // 3

console.log(call(add, 7));  // NaN
console.log(call(add, 7, 2));  // 9

function log(a, b) {
  return console.log(a, b);
}
call(log, 1, 2);  // 1, 2
call(log, 1); // 1, undefined