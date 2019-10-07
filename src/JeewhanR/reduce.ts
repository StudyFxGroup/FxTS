import { curry } from "./index";

type Reduce = (
  func: (acc: any, v: any) => any,
  acc: any | Iterable<any>,
  iter?: Iterable<any>
) => any;

export const reduce = curry((func, acc, iter) => {
  if (!iter) acc = acc[Symbol.iterator]().next().value;

  for (const item of iter) acc = func(acc, item);

  return acc;
});
