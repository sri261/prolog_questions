// 1.05 (*) Reverse a list.
const list5: Array<number | string | boolean> = [1, 2, "hsbsd", 4, true, 5, 4];

//input a list in the function and it will return a reverse list
export function reverseList(input: any[]) {
  let reverseList: Array<number | string | boolean> = [...input];
  reverseList = reverseList.reverse();
  return reverseList;
}
