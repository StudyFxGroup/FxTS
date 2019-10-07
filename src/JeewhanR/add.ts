import { reduce } from "./index";

type Add = (...args: number[]) => number;

export const add: Add = (...args) =>
  reduce((acc: number, v: number) => acc + v, args);
