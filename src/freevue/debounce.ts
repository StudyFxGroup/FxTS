import curry from './curry';
import delay from './delay';

export default curry(
  (f: Function, time: number) => {
    let i: number = 0;
  
    return <T>(..._: T[]) => {
      return delay(time, ++i)
        .then(
          (id: number) => id === i && f(..._)
        );
    };
  }
);