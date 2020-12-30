// 1.03 (*) Find the K'th element of a list.

let list3 = [1, "hsbsd", 4, false];

function kThElement<T>(input: Array<T>, kTh: number) {
  if (kTh > input.length) {
    throw new Error("kTh should be smaller of equal to lenth of array");
  } else {
    return input[kTh - 1];
  }
}

console.log(kThElement(list3, 3));
