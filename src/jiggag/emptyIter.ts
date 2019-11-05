// emptyL 함수: 빈 이터레이터 반환
const emptyIter = (function* () {
  yield null; // yield를 포함하지 않은 이터레이터의 경우 에러가 발생하는데 어떻게 처리하는지
} ());


export default function emptyL() { return emptyIter; };