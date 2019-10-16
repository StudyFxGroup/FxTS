// add 함수
// 숫자들을 매개변수로 받아 더하여 숫자를 리턴하는 함수입니다.

export const add = (a: number, b: number): number => {
  return a + b;
};


function typeNumber (a: number) {
	return a;
}

function typeAny (a: any) {
	return a;
}

function typeGeneric<T> (a: T): T {
	return a;
}

const returnNumber = typeNumber(123);
const returnAny = typeAny(123); // 리턴 타입이 뭐가 나올지 모름
const returnGeneric = typeGeneric(123); // 리턴 타입도 인자의 타입 그대로 반환
console.log({
  returnNumber: typeof returnNumber,
  returnAny: typeof returnAny,  // ??? 왜 number
  returnGeneric: typeof returnGeneric,
});