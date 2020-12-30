// 1.09 (**) Pack consecutive duplicates of list elements into sublists.
// If a list contains repeated elements they should be placed in separate sublists.

// Example:
// [a,a,a,a,b,c,c,a,a,d,e,e,e,e]
//  [[a,a,a,a],[b],[c,c],[a,a],[d],[e,e,e,e]]

const List9 = [
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

export function consecutiveDuplicates<T>(input: Array<any>) {
  const result = [];

  let counter: number = 1;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === input[i + 1]) {
      counter++;
    } else {
      const temp: Array<T> = [];
      for (let j = 0; j < counter; j++) {
        temp.push(input[i]);
      }
      result.push(temp);
      counter = 1;
    }
  }
  return result;
}
console.log(consecutiveDuplicates(List9));
