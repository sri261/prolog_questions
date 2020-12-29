//1.02 (*) Find the last but one element of a list.

let list2: Array<number | string | boolean> = [
  1,
  2,
  "hsbsd",
  4,
  true,
  43,
  65,
  32,
  false,
  "a",
];

function lastButOneElement(input: any[]) {
  return input[input.length - 2];
}

console.log(lastButOneElement(list2));
