// 2.04 (*) A list of prime numbers.
// Given a range of integers by its lower and upper limit, construct a list of all prime numbers in that range.
import { isPrime } from "./q2_01";

function primeNumRangeList(int1: number, int2: number) {
  let primeNumberList: Array<number> = [];
  if (int1 > int2) {
    return "int 1 should be smaller than int 2";
  } else {
    for (let i = int1; i <= int2; i++) {
      isPrime(i) ? primeNumberList.push(i) : null;
    }
  }

  return primeNumberList;
}
console.log(primeNumRangeList(30, 100));
