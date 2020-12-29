// 1.04 (*) Find the number of elements of a list.

const list4 = [1, 2, "hsbsd", 4, true];

function numOfElement<T>(input: Array<T>) {
  return input.length;
}

console.log(numOfElement(list4));
