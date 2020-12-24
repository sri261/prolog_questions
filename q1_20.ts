// 1.20 (*) Remove the K'th element from a list.
const list20: Array<number | string | boolean> = [0, 1, 2, 3, 4, 5, 6, 7];

export function removeKthElement(input: Array<any>, kthElement) {
  return [
    ...input.slice(0, kthElement),
    ...input.slice(kthElement + 1, input.length),
  ];
}
console.log(removeKthElement(list20, 3));
