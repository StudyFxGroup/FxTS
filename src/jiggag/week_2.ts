import delay from './delay';
import curryN from './curryN';
import debounce from './debounce';
import once from './once';

// delay
delay(1000, console.log('1초 후 로그')); // 1초 후 로그

// curryN
const func = curryN(3, (...args) => args.join('-'));
const func2 = curryN(3, (...args) => args.reduce((a, b) => a + b));
console.log(func('함수')('첫번째')('두번째')('세번째'));  // 함수-첫번째-두번째-세번째
console.log(func2(2)(4)(1)(1)); // 8

// debounce
const exDebounce = debounce((...args) => console.log(args.reduce((a, b) => a + b)), 500);
const exDebounce2 = debounce((...args) => console.log('debounce', args.join('-')), 500);
exDebounce(2, 1, 3);  // 6
exDebounce2('1번', '2번');  // 1번-2번

// once
const exOnce = once(a => a + 10);
console.log(exOnce(5)); // 15
console.log(exOnce(9)); // 15: 처음 호출된 한번만 실행되고 그 이후로는 처음 호출된 값이 반환됨