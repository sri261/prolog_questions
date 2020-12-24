// 1.23 (**) Extract a given number of randomly selected elements from a list.
const list23: Array<any> = [0, 1, 2, 3, 4, 5, 6, 7];

function randomElements(input: Array<any>, numOfEle: number) {
  let newList: Array<any> = [];
  for (let i = 0; i <= numOfEle; i++) {
    newList.push(input[Math.floor(Math.random() * (input.length - 1))]);
  }
  return newList;
}

console.log(randomElements(list23, 3));
