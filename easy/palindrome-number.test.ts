import { isPalindrome } from "./palindrome-number";

describe("Should return true if the number is a palindrome", () => {
    it("Should return true for 121", () => {
        expect(isPalindrome(121)).toBe(true);
    });
    it("Should return false for -121", () => {
        expect(isPalindrome(-121)).toBe(false);
    });
    it("Should return false for 10", () => {
        expect(isPalindrome(10)).toBe(false);
    });
});
