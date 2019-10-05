import { curry } from '../../FxTS';

export const call = curry(
  (fn: Function, ..._: any) => fn(..._)
);