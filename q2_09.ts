// 2.09 (**) Calculate Euler's totient function phi(m).
// Euler's so-called totient function phi(m) is defined as the number of positive integers r (1 <= r < m)
// that are coprime to m.

import { checkIfCoprime } from "./q2_08";

function eulersTotientFn(m: number) {
  let count: number = 0;

  for (let i = 0; i <= m; i++) {
    if (checkIfCoprime(i, m)) {
      count++;
    }
    // checkIfCoprime(i, m) ? count++ : null;
  }
  return count;
}
// console.log(eulersTotientFn(20));
