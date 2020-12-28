// 1.19 (**) Rotate a list N places to the left.
import { splitList } from "./q1_17";
import { flatten } from "./q1_07";
const list19: Array<any> = ["a", 2, 3, "d", true, "df", 1];

function rotateListNplacesLeft(input: Array<any>, numOfPlaces: number) {
  const temp: Array<any> = [];
  temp[0] = splitList(input, numOfPlaces)[1];
  temp[1] = splitList(input, numOfPlaces)[0];
  return flatten(temp);
}

console.log(rotateListNplacesLeft(list19, 3));
