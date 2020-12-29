// 1.04 (*) Find the number of elements of a list.

let list4: Array<number | string | boolean> = [1, 2, "hsbsd", 4, true];

function numOfElement(input: any[]) {
  return input.length;
}

console.log(numOfElement(list4));
