// delay 함수

import { curry } from "./curry";

export default curry(async function delay(time: number, a: any) {
  await new Promise((resolve: Function | string) => setTimeout(resolve, time));
  return a;
});