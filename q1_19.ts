// 1.19 (**) Rotate a list N places to the left.
import { splitList } from "./q1_17";
import { flatten } from "./q1_07";
const list19: Array<any> = ["a", 2, 3, "d", true, "df", 1];

function rotateListNplacesLeft(input: Array<any>, numOfPlaces: number) {
  ////incomplete
  console.log([
    ...input.slice(numOfPlaces + 1, input.length),
    ...input.slice(0, numOfPlaces),
  ]);
  //   return splitList(input, numOfPlaces);
}

// console.log(rotateListNplacesLeft(list19, 4));
rotateListNplacesLeft(list19, 3);
