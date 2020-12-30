// 2.09 (**) Calculate Euler's totient function phi(m).
// Euler's so-called totient function phi(m) is defined as the number of positive integers r (1 <= r < m)
// that are coprime to m.

import { checkIfCoprime } from "./q2_08";
import { integerFunction } from "./q1_22";

function eulersTotientFn(m: number) {
  return integerFunction(0, m).reduce(
    (acc, i) => (checkIfCoprime(i, m) ? acc + 1 : acc),
    0
  );
}
console.log(eulersTotientFn(20));
