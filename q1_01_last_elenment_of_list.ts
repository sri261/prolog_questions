//1.01 (*) Find the last element of a list.
//Example:
//?- my_last(X,[a,b,c,d]).
//X = d

let list: Array<number | string | boolean> = [1, 2, "hsbsd", 4, true];

function lastElement(input: any[]) {
  for (let i = 0; input[i] != undefined; i++) {
    if (input[i + 1] === undefined) {
      console.log(input[i]);
    }
  }
}
lastElement(list);
