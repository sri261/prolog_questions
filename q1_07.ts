// 1.07 (**) Flatten a nested list structure.
// Transform a list, possibly holding lists as elements into a 'flat' list by replacing each list with its elements (recursively).

// Example:
// ?- my_flatten([a, [b, [c, d], e]], X).
// X = [a, b, c, d, e]

// Hint: Use the predefined predicates is_list/1 and append/3

const nestedList: Array<any> = [1, ["w", [1, 2]], true, [4, 8]];

export function flatten(input: Array<any>) {
  return input.reduce((flatArray, currentItem) => {
    return flatArray.concat(
      Array.isArray(currentItem) ? flatten(currentItem) : currentItem
    );
  }, []);
}
console.log(flatten(nestedList));
