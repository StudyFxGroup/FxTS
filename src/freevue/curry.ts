const curry = (fn: Function) => (..._: any) => fn(..._)

const add = curry(
  (a: number, b: number) => a + b
)

console.log(add(1, 2))