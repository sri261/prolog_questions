// 1.11 (*) Modified run-length encoding.
// Modify the result of problem 1.10 in such a way that if an element has no duplicates it
// is simply copied into the result list.
// Only elements with duplicates are transferred as [N,E] terms.
const List11: Array<any> = [
  "a",
  "a",
  "a",
  "a",
  "b",
  "c",
  "c",
  "a",
  "a",
  "d",
  "e",
  "e",
  "e",
  "e",
];

function modifiedLengthEncoding(input: Array<any>) {
  let result: Array<any> = [];
  let counter: number = 1;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === input[i + 1]) {
      counter++;
    } else if (counter == 1) {
      result.push(input[i]);
    } else {
      result.push([input[i], counter]);
      counter = 1;
    }
  }
  return result;
}
console.log(modifiedLengthEncoding(List11));
