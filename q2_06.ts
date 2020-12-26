// Given a range of integers by its lower and upper limit,
//  print a list of all even numbers and their Goldbach composition.
import { getGoldbachPrimeNumbers } from "./q2_05";
import { flatten } from "./q1_07";

function checkIfEven(input: number) {
  return input % 2 === 0 ? true : false;
}

function getEvenNumbers(int1: number, int2: number) {
  let evenNumbers: Array<number> = [];
  if (int1 >= int2) {
    return "int 1 should be smaller than int 2";
  } else {
    for (let i = int1; i <= int2; i++) {
      checkIfEven(i) ? evenNumbers.push(i) : null;
    }
  }
  return evenNumbers;
}
function goldbachComposition(int1: number, int2: number) {
  let evenNumList: Array<any> = [getEvenNumbers(int1, int2)];
  return flatten(evenNumList).map((e) => {
    return getGoldbachPrimeNumbers(e);
  });
}
// console.log(checkIfEven(17));
// console.log(getEvenNumbers(10, 20));
console.log(goldbachComposition(20, 25));
