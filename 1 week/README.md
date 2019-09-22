# 1주차
* 기본 예제를 가지고 어떠한 형식으로 스터디를 진행하는지 정합니다.
* 서로 알아가는 시간을 가질 예정입니다.
* 다음 스터디의 내용을 선정할 예정입니다.

## 금주의 문제

### 첫번째 문제
```javascript
// constant 함수
//
// 상수를 선언하는 함수입니다.

function constant(a) {
  return _ => a;
}
```

### 두번째 문제
```javascript
// curry 함수
//
// 함수, 또는 어떠한 값을 매개변수로 받아 함수로 리턴하는 함수입니다.

function curry(f) {
  return (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._);
}
```

### 세번째 문제
```javascript
// add 함수
//
// 숫자들을 매개변수로 받아 더하여 숫자를 리턴하는 함수입니다.

import curry from "./curry.js";

curry(function add(a, b) {
  return a + b;
});
```

### 네번째 문제
```javascript
// call 함수
//
// 함수와 값들을 매개변수로 받아 함수에 값들을 넣어 실행시키는 함수입니다.

import curry from "./curry.js";

curry(function call(f, ...args) {
  return f(...args);
});
```
