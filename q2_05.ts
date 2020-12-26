// 2.05 (**) Goldbach's conjecture.
// Goldbach's conjecture says that every positive even number greater than 2 is the sum of two prime numbers.
// Example: 28 = 5 + 23. It is one of the most famous facts in number theory that has not been proved to be correct in the general case. It has been numerically confirmed up to very large numbers (much larger than we can go with our Prolog system). Write a predicate to find the two prime numbers that sum up to a given even integer.
// Write a predicate to find the two prime numbers that sum up to a given even integer.
import { isPrime } from "./q2_01";
function getPrimeNumbers(input: number) {
  let getPrimeNumbersList: Array<any> = [];
  for (let i = 0; i < input / 2; i++) {
    if (isPrime(i)) {
      for (let j = 0; j < input; j++) {
        if (isPrime(j) && i + j === input) {
          let tempList: Array<number> = [];
          tempList.push(i, j);

          getPrimeNumbersList.push(tempList);
        }
      }
    }
  }
  return getPrimeNumbersList;
}
console.log(getPrimeNumbers(50));
