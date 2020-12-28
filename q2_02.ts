// 2.02 (**) Determine the prime factors of a given positive integer.

export function primeFactors(input: number) {
  let primeFactorNumbers: Array<number> = [];
  let divisor = 2;
  while (input > 2) {
    if (input % divisor == 0) {
      primeFactorNumbers.push(divisor);
      input = input / divisor;
    } else {
      divisor++;
    }
  }
  return primeFactorNumbers;
}
console.log(primeFactors(20));
