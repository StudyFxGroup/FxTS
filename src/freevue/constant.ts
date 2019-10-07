function constant<T>(a: T) {
  return (_?: T) => a;
}

const foo = constant<number>(5);
const bar = constant<string>('Hello World!');
const bool = constant<boolean>(true);

console.log(foo()); // 5
console.log(bar()); // Hello World!
console.log(bool()); // true