// 1.17 (*) Split a list into two parts; the length of the first part is given.
const list17: Array<any> = [0, 1, 2, 3, 4, 5, 6, 7];
function splitList(input: Array<any>, lengthOfFirstPart: number) {
  if (lengthOfFirstPart >= input.length) {
    return "Enter length of first part Smaller than input array length";
  } else {
    let firstPart = input.slice(0, lengthOfFirstPart);
    let secondPart = input.slice(lengthOfFirstPart + 1);

    return firstPart;
  }
}

console.log(splitList(list17, 5));
