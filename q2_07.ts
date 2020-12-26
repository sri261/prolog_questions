// 2.07 (**) Determine the greatest common divisor of two positive integer numbers.

function greatestCommonDivisor(int1: number, int2: number) {
  while (int1 % int2 > 0) {
    let remainder: number = int1 % int2;
    int1 = int2;
    int2 = remainder;
  }
  return int2;
}
console.log(greatestCommonDivisor(12, 16));
