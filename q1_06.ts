// 1.06 (*) Find out whether a list is a palindrome.
import { reverseList } from "./q1_05";
const notPalindromeList: Array<any> = [1, 2, 3, 4, 5, 21, 75];
const palindromeList: Array<any> = [1, 2, 3, 2, 1];

export function checkPalindrome(input: Array<any>) {
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
