// constant 함수
// 상수를 선언하는 함수입니다.

export function constant<T> (a: string | number) {
  return (_?: T[]) => a;
};

const constantA = constant('A');
const constantNum = constant(1);
const constantStr = constant('상수');

console.log(constantA()); // A
console.log(constantNum()); // 1
console.log(constantStr()); // 상수
  