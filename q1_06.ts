// 1.06 (*) Find out whether a list is a palindrome.
const notPalindromeList = [1, 2, 3, 4, 5, 21, 75];
const palindromeList = ["z", 1, 2, "a", 2, 1, "z"];

export function checkPalindrome<T>(input: Array<T>) {
  for (let i = 0; i < input.length / 2; i++) {
    return input[i] === input[input.length - i - 1] ? true : false;
  }
}

console.log(checkPalindrome(notPalindromeList));
console.log(checkPalindrome(palindromeList));
