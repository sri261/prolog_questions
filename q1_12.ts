// 1.12 (**) Decode a run-length encoded list.
import { flatten } from "./q1_07";
const List12: Array<any> = [
  [4, "a"],
  [1, "b"],
  [2, "c"],
  [2, "a"],
  [1, "d"],
  [4, "e"],
];

function decodeList(input: Array<any>) {
  return input.reduce((p, c, i) => {
    return p.fill(c[1]);
  });
  // let tempList: Array<any> = [];
  // for (let i = 0; i < input.length; i++) {
  //   for (let j = 0; j < input[i][0]; j++) {
  //     tempList.push(input[i][1]);
  //   }
  // }
  // return tempList;
}

console.log(decodeList(List12));
