// 1.03 (*) Find the K'th element of a list.

let list3: Array<number | string | boolean> = [1, "hsbsd", 4, false];

function kThElement(input: any[], kTh: number) {
  for (let i = 0; input[i] != undefined; i++) {
    if (input[i + 1] === undefined) {
      if (kTh > i) {
        console.log(
          "lenght of list is " + i + " enter number smaller than " + i
        );
      } else {
        console.log(input[kTh], "kTh Element");
      }
    }
  }
}
kThElement(list3, 3); //enter array and kTh elenment parameters
