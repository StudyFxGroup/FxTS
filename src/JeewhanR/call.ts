import { curry } from "./index";

type Call = (func: Function, ...args: any[]) => any;

export const call: Call = (func, ...args) => func(...args);
