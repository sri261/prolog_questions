// 1.17 (*) Split a list into two parts; the length of the first part is given.

import { sliceFromList } from "./q1_18";
const list17: Array<number | string | boolean> = [0, 1, 2, 3, 4, 5, 6, 7];

export function splitList(
  input: Array<number | string | boolean>,
  lengthOfFirstPart: number
) {
  if (lengthOfFirstPart >= input.length) {
    return "Enter length of first part Smaller than input array length";
  } else {
    let firstPart = input.slice(0, lengthOfFirstPart);
    let secondPart = input.slice(lengthOfFirstPart);

    return [secondPart, firstPart];
  }
}
//Using splitFromList() from q1_18
function splitList2(
  input: Array<number | string | boolean>,
  lengthOfFirstPart: number
) {
  return sliceFromList(list17, 0, lengthOfFirstPart);
}

console.log(splitList(list17, 5));
console.log(splitList2(list17, 5));
