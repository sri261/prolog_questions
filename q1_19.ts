// 1.19 (**) Rotate a list N places to the left.
import { splitList } from "./q1_17";
import { flatten } from "./q1_07";
const list19: Array<number | string | boolean> = [
  "a",
  2,
  3,
  "d",
  true,
  "df",
  1,
];

function rotateListNplacesLeft(input: Array<any>, numOfPlaces: number) {
  ////incomplete
  return splitList(input, numOfPlaces);
}

console.log(rotateListNplacesLeft(list19, 4));
