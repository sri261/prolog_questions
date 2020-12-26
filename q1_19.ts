// 1.19 (**) Rotate a list N places to the left.
import { splitList } from "./q1_17";
import { flatten } from "./q1_07";
const list19: Array<any> = ["a", 2, 3, "d", true, "df", 1];

function rotateListNplacesLeft(input: Array<any>, numOfPlaces: number) {
  return [
    ...input.slice(numOfPlaces + 1, input.length),
    ...input.slice(0, numOfPlaces),
  ];
}

console.log(rotateListNplacesLeft(list19, 2));
