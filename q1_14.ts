// 1.14 (*) Duplicate the elements of a list.
// Example:
// ?- dupli([a,b,c,c,d],X).
// X = [a,a,b,b,c,c,c,c,d,d]
import { flatten } from "./q1_07";

const list14 = ["a", 2, 4, 5, 6, true];

function duplicateElements<T>(input: Array<T>) {
  return flatten(
    input.map((e) => {
      return [e, e];
    })
  );
}

console.log(duplicateElements(list14));
