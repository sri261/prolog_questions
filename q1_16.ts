// 1.16 (**) Drop every N'th element from a list.
const list16: Array<any> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function dropNthElement(input: Array<any>, nthEle: number) {
  return input.filter((carVal, index) => {
    return index % nthEle != 0;
  });
}
console.log(dropNthElement(list16, 4));
