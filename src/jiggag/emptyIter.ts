// emptyL 함수: 빈 이터레이터 반환
const emptyIter = (function* () {
} ());

export default function emptyL() { return emptyIter; };