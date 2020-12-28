// 1.25 (*) Generate a random permutation of the elements of a list.
// Example:
// ?- rnd_permu([a,b,c,d,e,f],L).
// L = [b,a,d,c,e,f]
import { randomElements } from "./q1_23";

const List25: Array<any> = ["a", "b", "c", "d", "e", "f"];
function randomPermutationOfList(input: Array<any>) {
  let tempList: Array<number> = [];
  for (let i = 0; i <= input.length; i++) {
    let temp = input[Math.floor(Math.random() * (input.length - 1))];
    if (!tempList.indexOf(temp)) {
      tempList.push(temp);
    }
    // tempList.indexOf(temp) ? tempList.push(temp) : null;
    return tempList;
  }

  //   return randomElements(input, input.length);
}

console.log(randomPermutationOfList(List25));
