// emptyL 함수: 빈 이터레이터 반환
const emptyIter = (function* () {
  yield; // yield를 포함하지 않은 이터레이터의 경우 에러가 발생하는데 어떻게 처리하는지
} ());


export default function emptyL() { return emptyIter; };

/**
 * Generator -> next로 다음 yield 호출
 * next1: 첫번째 yield 호출. 선언된 값 없으므로 value = undefined, 진행중이므로 done = false.
 * next2: 다음 yield 호출하였으나 없으므로 종료 done = true.
 * next3: 다음 yield 호출하였으나 없으므로 종료 done = true.
 */
const generator = emptyL();
const next1 = emptyL().next();
const next2 = emptyL().next();
const next3 = emptyL().next();
console.log(generator); // Object [Generator] {}
console.log(next1); // { value: undefined, done: false }
console.log(next2); // { value: undefined, done: true }
console.log(next3); // { value: undefined, done: true }