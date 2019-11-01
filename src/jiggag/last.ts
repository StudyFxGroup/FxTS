// last 함수: 배열의 마지막 값
export default function last<T> (arr: Array<T>) {
  return arr[arr.length - 1];
}

const testArray = [1,2,3];
const testArray2 = ['1번','2번','3번'];
console.log(last(testArray));
console.log(typeof last(testArray));
console.log(last(testArray2));
console.log(typeof last(testArray2));
