// 1.21 (*) Insert an element at a given position into a list.
const list21: Array<number | string | boolean> = [0, 1, 2, 3, 4, 5, 6, 7];

function insertEleKth(input: Array<any>, kthpositon: number, ele: any) {
  if (kthpositon > input.length) {
    return "ERROR:Enter Kthpositon smaller that length of list";
  } else {
    return input
      .slice(0, kthpositon)
      .concat(ele, input.slice(kthpositon + 1, input.length));
  }
}
console.log(insertEleKth(list21, 6, false));
