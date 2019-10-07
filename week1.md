# 1주차
* 기본 예제를 가지고 어떠한 형식으로 스터디를 진행하는지 정합니다.
* 서로 알아가는 시간을 가질 예정입니다.
* 다음 스터디의 내용을 선정할 예정입니다.

## 금주의 문제

### 첫번째 문제
> `기존 소스`
> ```javascript
> // constant 함수
> //
> // 상수를 선언하는 함수입니다.
> 
> function constant(a) {
>   return _ => a;
> }
> ```

> `스터디원 소스`
> ```typescript
> // freevue님의 소스
> function constant<T>(a: T) {
>   return (_?: T) => a;
> }
> 
> // jiggag님의 소스
> const constant = (a: string | number) > => {
>   return (_?: typeof globalThis) => a;
> };
>
> // JeewhanR님의 소스
> const constant = (arg: any) => () => arg;
> ```

### 두번째 문제
> `기존 소스`
> ```javascript
> // curry 함수
> //
> // 함수를 매개변수로 받아 후 클로저 형태로 실행이 되는 함수
> 
> function curry(f) {
>   return (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._);
> }
> ```

> `스터디원 소스`
> ```typescript
> // freevue님의 소스
> const curry = (fn: Function) => (..._: any) => fn(..._)
> 
> // jiggag님의 소스
> import { constant } from './constant';
> 
> const curry: Function = (f: Function): Function => {
>   return (a: typeof constant, ..._): Function => {
>     return _.length ? (
>       f(a, ..._)
>     ) : (
>       (..._) => f(a, ..._)
>     ); 
>   };
> };
>
> // JeewhanR님의 소스
> type Curry = (func: Function, len?: number) => any;
> 
> const curry: Curry = (func, len = func.length - 1) =>
>   function _recur(...args: any[]) {
>     return args.length > len
>       ? func(...args)
>       : (...args2: any[]) => _recur(...args, ...args2);
>   };
> ```

### 세번째 문제
> `기존 소스`
> ```javascript
> // add 함수
> //
> // 숫자들을 매개변수로 받아 더하여 숫자를 리턴하는 함수입니다.
> 
> import curry from "./curry.js";
> 
> curry(function add(a, b) {
>   return a + b;
> });
> ```

> `스터디원 소스`
> ```typescript
> // freevue님의 소스
> import { curry } from '../../FxTS';
> 
> const add = curry(
>   (a: number, b: number) => a + b
> );
> 
> // jiggag님의 소스
> const add = (a: number, b: number): number => {
>   return a + b;
> };
>
> // JeewhanR님의 소스
> import { reduce } from "./index";
> 
> type Add = (...args: number[]) => number;
> 
> const add: Add = (...args) =>
>   reduce((acc: number, v: number) => acc + v, args);
> ```

### 네번째 문제
> `기존 소스`
> ```javascript
> // call 함수
> //
> // 함수와 값들을 매개변수로 받아 함수에 값들을 넣어 실행시키는 함수입니다.
> 
> import curry from "./curry.js";
> 
> curry(function call(f, ...args) {
>   return f(...args);
> });
> ```

> `스터디원 소스`
> ```typescript
> // freevue님의 소스
> const curry = (fn: Function) => (..._: any) => fn(..._)
> 
> // jiggag님의 소스
> const call = (f: Function, ...args): Function => {
>   return f(...args);
> };
>
> // JeewhanR님의 소스
> type Call = (func: Function, ...args: any[]) => any;
> 
> const call: Call = (func, ...args) => func(...args);
> ```
