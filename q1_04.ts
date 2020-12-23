// 1.04 (*) Find the number of elements of a list.

let list4: Array<number | string | boolean> = [1, 2, "hsbsd", 4, true];

function numOfElement(input: any[]) {
  for (let i = 0; input[i] != undefined; i++) {
    if (input[i + 1] === undefined) {
      console.log("Number of Elements of the List are ", i + 1);
    }
  }
}
numOfElement(list4);
