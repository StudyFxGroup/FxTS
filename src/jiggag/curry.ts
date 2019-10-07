// curry 함수
// 함수, 또는 어떠한 값을 매개변수로 받아 함수로 리턴하는 함수입니다.

import { constant } from './constant';

export const curry: Function = (f: Function): Function => {
  return (a: typeof constant, ..._): Function => {
    return _.length ? (
      f(a, ..._)
    ) : (
      (..._) => f(a, ..._)
    ); 
  };
};