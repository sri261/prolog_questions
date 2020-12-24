// 1.20 (*) Remove the K'th element from a list.
const list20: Array<number | string | boolean> = [0, 1, 2, 3, 4, 5, 6, 7];

function removeKthElement(input: Array<any>, kthElement) {
  console.log([
    ...input.slice(0, kthElement),
    ...input.slice(kthElement + 1, input.length),
  ]);
}

removeKthElement(list20, 3);
