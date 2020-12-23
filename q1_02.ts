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
];
function lastButOneElement(input: any[]) {
  for (let i = 0; input[i] != undefined; i++) {
    if (input[i + 1] === undefined) {
      console.log(input[i - 1]);
    }
  }
}
lastButOneElement(list2);
