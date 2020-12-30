// 1.15 (**) Duplicate the elements of a list a given number of times.
// Example:
// ?- dupli([a,b,c],3,X).
// X = [a,a,a,b,b,b,c,c,c]

// What are the results of the goal:
// ?- dupli(X,3,Y).
import { flatten } from "./q1_07";

const list15 = ["a", 2, 4, 5, 6, true];

function duplicateElementsNumberofTimes<T>(input: T[], numOfTimes: number) {
  return flatten(
    input.map((e) => {
      const duplicateElementsList = [];
      for (let i = 0; i < numOfTimes; i++) {
        duplicateElementsList.push(e);
      }
      return duplicateElementsList;
    })
  );
}

console.log(duplicateElementsNumberofTimes(list15, 5));
