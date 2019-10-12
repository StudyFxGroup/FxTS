// once 함수: 선언되고 처음 한번만 실행됨. 재호출해도 처음 값 그대로 반환

/**
 * @param fn 인자를 포함하고 한번만 실행될 함수
 */
export default function once<T>(fn: Function) {
  /**
   *  done 한번만 실행하기 위한 변수 체크
   *  res 한번 실행될 함수 임시저장
   */
  let done: boolean = false, res: Function | null = null;
  return (...args: T[]) =>
    done ? res : (done = true, res = fn(...args));
}