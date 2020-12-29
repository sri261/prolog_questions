// 1.25 (*) Generate a random permutation of the elements of a list.
// Example:
// ?- rnd_permu([a,b,c,d,e,f],L).
// L = [b,a,d,c,e,f]
import { randomElements } from "./q1_23";

const List25: Array<any> = ["a", "b", "c"];
function permutationOfList<T>(input: Array<T>) {
  const ret = [];

  for (let i = 0; i < input.length; i = i + 1) {
    let rest = permutationOfList(input.slice(0, i).concat(input.slice(i + 1)));

    if (!rest.length) {
      ret.push([input[i]]);
    } else {
      for (let j = 0; j < rest.length; j = j + 1) {
        ret.push([input[i]].concat(rest[j]));
      }
    }
  }
  return ret;
}

// console.log(perm([1,2,3]).join("\n"));
console.log(permutationOfList(List25));
// let tempList: Array<number> = [];
// for (let i = 0; i <= input.length; i++) {
//   let temp = input[Math.floor(Math.random() * (input.length - 1))];
//   if (!tempList.indexOf(temp)) {
//     tempList.push(temp);
//   }
//   // tempList.indexOf(temp) ? tempList.push(temp) : null;
//   return tempList;
// }

//   return randomElements(input, input.length);
