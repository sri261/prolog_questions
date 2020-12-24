// 1.14 (*) Duplicate the elements of a list.
// Example:
// ?- dupli([a,b,c,c,d],X).
// X = [a,a,b,b,c,c,c,c,d,d]

const list14: Array<any> = ["a", 2, 4, 5, 6, true];

function duplicateElements(input: Array<any>) {
  let duplicateElementsList: Array<any> = [];
  input.map((e) => {
    duplicateElementsList.push(e, e);
  });
  return duplicateElementsList;
}
console.log(duplicateElements(list14));
