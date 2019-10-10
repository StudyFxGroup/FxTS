// delay 함수: 해당 시간만큼 딜레이 후 실행

import { curry } from './curry';

/**
 * @param {number} time 딜레이 요청하는 시간
 * @param {any} a 딜레이 후 반환되는 값
 */
export default curry(async function delay<T>(time: number, a: T) {
  await new Promise((resolve: Function | string) => setTimeout(resolve, time));
  return a;
});