import delay from './delay';
import curryN from './curryN';

// delay
delay(1000,  console.log("1초 후 로그"));

// curryN
const func = curryN(3, (...args) => args.join('-'));
console.log(func('함수')('첫번째')('두번째')('세번째'));
const func2 = curryN(3, (...args) => args.reduce((a, b) => a + b));
console.log(func2(2)(4)(1)(1));