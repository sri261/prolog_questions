// 2.04 (*) A list of prime numbers.
// Given a range of integers by its lower and upper limit, construct a list of all prime numbers in that range.
import { isPrime } from "./q2_01";
import { integerFunction } from "./q1_22";

function primeNumRangeList(int1: number, int2: number) {
  return integerFunction(int1, int2).filter((e) => {
    if (isPrime(e)) {
      return e;
    }
  });
}
console.log(primeNumRangeList(10, 40));
