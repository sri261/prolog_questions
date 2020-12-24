// 1.18 (**) Extract a slice from a list.
const list18: Array<any> = ["a", 2, 3, "d", true, "df"];
export function sliceFromList(
  input: Array<any>,
  firstIndex: number,
  secondIndex: number
) {
  if (firstIndex > secondIndex) {
    return "firstIndex should be smaller than second Index";
  } else if (secondIndex > input.length) {
    return "Do not enter second number greater than lenght of input list";
  } else if (firstIndex >= input.length) {
    return "enter first index atleast one count smaller than input list";
  } else {
    return input.slice(firstIndex, secondIndex);
  }
}

// console.log(sliceFromList(list18, 3, 4));
