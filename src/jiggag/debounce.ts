
// debounce 함수: 설정한 시간만큼 호출이 없으면 해당 함수 한번 실행

import { curry } from './curry';
import delay from './delay';

/**
 * @param {Function} fn 디바운스 설정한 함수
 * @param {number} time 호출이 멈추고 설정한 시간이 흐른뒤 함수가 한번 실행됨
 */
export default curry(function debounce<T>(fn: Function, time: number) {
  let i = 0;
  return function _debounce(...args: T[]) {
    /**
     * delay(time, fn): time 시간 딜레이 후 fn 실행
     */
    return delay(time, ++i).then((id: number) => id === i && fn(...args));
  };
});