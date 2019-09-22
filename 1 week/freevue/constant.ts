function constant(a: string): any {
  return (_: any) => a;
}

const foo: string = constant('A')