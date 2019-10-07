# 2주차
* 1주차에 이야기 된 방향으로 진행하겠습니다.
* 1주차에 참여하지 못한 스터디원들의 이야기를 더 들어보고 향후 방향을 수정하겠습니다.

## 금주의 문제

### 첫번째 문제
> `기존 소스`
> ```javascript
> // delay 함수
> 
> import curry from "./curry.js";
> 
> export default curry(async function delay(time, a) {
>   await new Promise(resolve => setTimeout(resolve, time));
>   return a;
> });
> ```

> `스터디원 소스`
> ```typescript
> ```

### 두번째 문제
> `기존 소스`
> ```javascript
> // curryN 함수
> 
> import curry from "./curry.js";
> 
> export default curry(function curryN(n, f) {
>   return function _recur(a, ..._) {
>     return _.length >= n
>       ? f(a, ..._)
>       : (...__) => _recur(a, ..._, ...__);
>   }
> });
> ```

> `스터디원 소스`
> ```typescript
> ```

### 세번째 문제
> `기존 소스`
> ```javascript
> // debounce 함수
> 
> import curry from "./curry.js";
> import delay from "./delay.js";
> 
> export default curry(function debounce(f, time) {
>   let i = 0;
>   return function _debounce(...args) {
>     return delay(time, ++i).then(id => id === i && f(...args));
>   };
> });
> ```

> `스터디원 소스`
> ```typescript
> ```

### 네번째 문제
> `기존 소스`
> ```javascript
> // once 함수
> 
> export default function once(f) {
>   let done = false, res = null;
>   return (...args) =>
>     done ? res : (done = true, res = f(...args));
> }
> ```

> `스터디원 소스`
> ```typescript
> ```
