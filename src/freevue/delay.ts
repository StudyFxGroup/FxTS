import curry from './curry';

declare let Promise: any;

export default curry(
  async <N>(time: number, a: N) => {
    await new Promise(
      (resolve: Function) => setTimeout(resolve, time)
    );

    return a;
  }
);