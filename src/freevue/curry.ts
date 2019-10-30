export default <T>(fn: Function) =>
  (a: T, ..._: any) =>
    _.length
      ? fn(a, ..._)
      : <N>(..._: N[]) => fn(a, ..._);