// curryN 함수

import { curry } from './curry';
import { constant } from './constant';

/**
 * @param {number} n 커리 함수 생성 갯수 ( 2 => ()()() 파라미터가 2개가 더 추가됨)
 * @param {function} f 커리N으로 변환할 함수
 * @returns {function} _recur: 재귀함수
 */
// function identity<T> (arg: T): T {}
export default curry(function curryN<T>(n: number, f: Function) {
  /**
   * @param {number} a 커리 함수 파라미터
   * @param {array} _ 커리 재귀함수 args
   */
  return function _recur(a: typeof constant, ...args: T[]): Function {
    return args.length >= n  // 커리함수 파라미터가 n번 들어오고나면 재귀 종료
      ? f(a, ...args)  // 재귀 끝
      : (...args2: T[]) => _recur(a, ...args, ...args2);  // 재귀
  }
});