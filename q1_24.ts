// 1.24 (*) Lotto: Draw N different random numbers from the set 1..M.
import { integerFunction } from "./q1_22";
import { randomElements } from "./q1_23";

function randomNumbers(int1: number, int2: number, num: number) {
  return randomElements(integerFunction(int1, int2), num);
}
console.log(randomNumbers(10, 20, 5));
