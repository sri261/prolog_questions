// 1.15 (**) Duplicate the elements of a list a given number of times.
// Example:
// ?- dupli([a,b,c],3,X).
// X = [a,a,a,b,b,b,c,c,c]

// What are the results of the goal:
// ?- dupli(X,3,Y).

const list15: Array<any> = ["a", 2, 4, 5, 6, true];

function duplicateElementsNumberofTimes<T>(
  input: Array<T>,
  numOfTimes: number
) {
  const duplicateElementsList: Array<any> = [];
  input.map((e) => {
    for (let i = 0; i < numOfTimes; i++) {
      duplicateElementsList.push(e);
    }
  });
  return duplicateElementsList;
}
console.log(duplicateElementsNumberofTimes(list15, 4));
