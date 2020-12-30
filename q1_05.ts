// 1.05 (*) Reverse a list.
const list5 = [1, 2, "hsbsd", 4, true, 5, 4];

export function reverseList(input: Array<any>) {
  return input.reduce((accu, currItem) => {
    return [currItem].concat(accu);
  });
}
// console.log(reverseList(list5));
