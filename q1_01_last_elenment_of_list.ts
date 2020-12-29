//1.01 (*) Find the last element of a list.
//Example:
//?- my_last(X,[a,b,c,d]).
//X = d
import { splitList } from "./q1_17";
let list = [1, 2, "hsbsd", 4, true];

export function head<T>(input: Array<T>) {
  return input[0];
}
export function tail<T>(input: Array<T>) {
  return splitList(input, 1)[1];
}

function lastElement<T>(input: Array<T>) {
  // let temp;
  // if (tail(input).length != 0) {
  //   temp = tail(input);
  //   lastElement(temp);
  // } else {
  //   return temp;
  // }
  return input[input.length - 1];
}

console.log(lastElement(list));
