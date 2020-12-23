// 1.05 (*) Reverse a list.
let list5: Array<number | string | boolean> = [1, 2, "hsbsd", 4, true];

function reverseList(input: any[]) {
  for (let i = 0; input[i] != undefined; i++) {
    if (input[i + 1] === undefined) {
      let listLength = i;
      let reversedList: Array<number | string | boolean> = [listLength];
      console.log("Reverse List");
      for (listLength; listLength >= 0; listLength--) {
        console.log(input[listLength]);
      }
    }
  }
}
reverseList(list5);
