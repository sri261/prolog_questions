// 1.21 (*) Insert an element at a given position into a list.
import { splitList } from "./q1_17";
import { flatten } from "./q1_07";

const list21: Array<number | string | boolean> = [0, 1, 2, 3, 4, 5, 6, 7];

function insertEleKth(input: Array<any>, kthpositon: number, ele: any) {
  if (kthpositon > input.length) {
    throw new Error("Enter Kthpositon smaller that length of list");
  } else {
    const temp: Array<any> = [];
    temp[0] = splitList(input, kthpositon)[0];
    temp[1] = ele;
    temp[2] = splitList(input, kthpositon)[1];
    return flatten(temp);
  }
}
console.log(insertEleKth(list21, 3, false));
