export default (f: Function) => {
  let done: boolean = false
  let res: null | Function = null;

  return <T>(..._: T[]) =>
    done
      ? res
      : (
        done = true,
        res = f(..._)
      );
};
