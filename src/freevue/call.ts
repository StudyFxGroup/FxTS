import curry from './curry';

export default curry(
  (fn: Function, ..._: any[]) => fn(..._)
);