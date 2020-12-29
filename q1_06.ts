// 1.06 (*) Find out whether a list is a palindrome.
import { reverseList } from "./q1_05";
const notPalindromeList = [1, 2, 3, 4, 5, 21, 75];
const palindromeList = [1, 2, 3, 2, 1];

export function checkPalindrome<T>(input: Array<T>) {
  // if (reverseList(input) === input) {
  //   return true;
  // } else {
  //   return false;
  // }

  if (JSON.stringify(reverseList(input)) === JSON.stringify(input)) {
    return true;
  } else {
    return false;
  }
}

console.log(checkPalindrome(notPalindromeList));
console.log(checkPalindrome(palindromeList));
