/**
 * Palindrome Number
 *
 * Solved: Nov 05, 2022 00:09
 * @see https://leetcode.com/problems/palindrome-number/submissions/837033226/
 */

export function isPalindrome(x: number): boolean {
    return x.toString().split("").reverse().join("") === x.toString();
}
