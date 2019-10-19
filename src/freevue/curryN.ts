import curry from './curry';

export default curry(
  function curryN(n: number, f: Function) {
    return function _recur<T, N, M>(a: T, ..._: N[]) {
      return _.length >= n
        ? f(a, ..._)
        : (...__: M[]) => _recur(a, ...[..._, ...__]);
    }
  }
);