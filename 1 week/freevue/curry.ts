// function curry<T>(f: void | T) {
//   return <N, U>(a: N, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._);
// }

// const add = curry((a, b) => a + b);

// add(10, 5); // 15