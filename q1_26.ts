// 1.26 (**) Generate the combinations of K distinct objects chosen from the N elements of a list
const List26: Array<any> = ["a", "b", "c", "d", "e", "f", "g"];
const List264: Array<any> = ["a", "b", "c"];

function combinations(input: Array<any>, k) {
  //[0] [loop 1-last] [loop 2-last]
  let combiList: Array<any> = [];

  for (let j = 0; j < k; j++) {
    for (let i = j; i < input.length; i++) {
      let combi: Array<any> = [];
      combi.push(input[i]);
      return combi;
    }
    combiList.push();
  }
  return combiList;
}

console.log(combinations(List264, 2));
