type Curry = (func: Function, len?: number) => any;

export const curry: Curry = (func, len = func.length - 1) =>
  function _recur(...args: any[]) {
    return args.length > len
      ? func(...args)
      : (...args2: any[]) => _recur(...args, ...args2);
  };
