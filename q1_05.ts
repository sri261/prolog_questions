// 1.05 (*) Reverse a list.
const list5: Array<any> = [1, 2, "hsbsd", 4, true, 5, 4];

export function reverseList(input: Array<any>) {
  return input.reduce((p, c) => {
    return [c].concat(p);
  });
}
console.log(reverseList(list5));
