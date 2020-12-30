// 1.23 (**) Extract a given number of randomly selected elements from a list.
const list23: Array<any> = [0, 1, 2, 3, 4, 5, 6, 7];

function checkIfItemNotPresent<T>(input: T[], item) {
  // true return value indicates item not present
  return input.indexOf(item) === -1 ? true : false;
}
function randomItemOfArray<T>(input: T[]) {
  let random = input[Math.floor(Math.random() * (input.length - 1))];
  return random;
}
function discard<T>(input: T[], itemToDiscard) {
  return input.filter((e) => {
    return e !== itemToDiscard;
  });
}

export function randomElements<T>(input: Array<T>, numOfEle: number) {
  let newList = [];
  let tempInputList = [...input];

  for (let i = 0; i <= numOfEle; i++) {
    let tempRandom = randomItemOfArray(tempInputList);
    if (checkIfItemNotPresent(newList, tempRandom)) {
      newList.push(tempRandom);
      discard(tempInputList, tempRandom);
    }
  }

  return newList;
}

// console.log(randomElements(list23, 6));

// console.log(randomItemOfArray(list23));
// console.log(checkIfItemNotPresent(list23, 2));
// console.log(discard(list23, 2));
