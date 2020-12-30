// 1.22 (*) Create a list containing all integers within a given range.

export function integerFunction(int1: number, int2: number) {
  let intList: Array<number> = [];
  for (let i = int1; i <= int2; i++) {
    intList.push(i);
  }
  return intList;
}
// console.log(integerFunction(2, 20));
