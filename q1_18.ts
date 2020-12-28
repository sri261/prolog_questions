// 1.18 (**) Extract a slice from a list.
const list18: Array<any> = ["a", 2, 3, "d", true, "df"];
export function sliceFromList(
  input: Array<any>,
  firstIndex: number,
  secondIndex: number
) {
  if (firstIndex > secondIndex) {
    throw new Error("firstIndex should be smaller than second Index");
  } else if (secondIndex > input.length) {
    throw new Error(
      "Do not enter second number greater than lenght of input list"
    );
  } else if (firstIndex >= input.length) {
    throw new Error(
      "enter first index atleast one count smaller than input list"
    );
  } else {
    return input.slice(firstIndex, secondIndex);
  }
}

// console.log(sliceFromList(list18, 3, 6));
