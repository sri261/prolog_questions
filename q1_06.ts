// 1.06 (*) Find out whether a list is a palindrome.
import { reverseList } from "./q1_05";
let notPalindromeList: Array<number | string | boolean> = [
  1,
  2,
  3,
  4,
  5,
  21,
  75,
];
let palindromeList: Array<any> = [1, 2, 3, 2, 1];

export function checkPalindrome(input: any[]) {
  if (JSON.stringify(reverseList(input)) == JSON.stringify(input)) {
    return true;
  } else {
    return false;
  }
}

console.log(checkPalindrome(notPalindromeList));
console.log(checkPalindrome(palindromeList));
