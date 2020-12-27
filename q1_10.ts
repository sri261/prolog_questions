// 1.10 (*) Run-length encoding of a list.
const List10: Array<any> = [
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

function lengthEncoding(input: Array<any>) {
  let result: Array<any> = [];
  let counter: number = 1;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === input[i + 1]) {
      counter++;
    } else {
      result.push([input[i], counter]);
      counter = 1;
    }
  }
  return result;
}
console.log(lengthEncoding(List10));
