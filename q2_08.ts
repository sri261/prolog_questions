// 2.08 (*) Determine whether two positive integer numbers are coprime.
// Two numbers are coprime if their greatest common divisor equals 1.
import { greatestCommonDivisor } from "./q2_07";

export function checkIfCoprime(int1: number, int2: number) {
  return greatestCommonDivisor(int1, int2) === 1 ? true : false;
}
// console.log(checkIfCoprime(10, 15));
