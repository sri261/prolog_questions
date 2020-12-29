// 1.26 (**) Generate the combinations of K distinct objects chosen from the N elements of a list
const List26: Array<any> = ["a", "b", "c", "d"];

function combinations<T>(input: Array<T>, k: number) {
  if (k > input.length || k <= 0) {
    return [];
  }

  if (k == input.length) {
    return [input];
  }

  if (k == 1) {
    const combs = [];
    for (let i = 0; i < input.length; i++) {
      combs.push([input[i]]);
    }
    return combs;
  }

  const combs = [];
  for (let i = 0; i < input.length - k + 1; i++) {
    const head = input.slice(i, i + 1);
    const tailcombs = combinations(input.slice(i + 1), k - 1);
    for (let j = 0; j < tailcombs.length; j++) {
      combs.push(head.concat(tailcombs[j]));
    }
  }
  return combs;
}

console.log(combinations(List26, 3));
