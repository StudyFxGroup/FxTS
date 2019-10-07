import { curry } from '../../FxTS';

export const add = curry(
  (a: number, b: number) => a + b
);