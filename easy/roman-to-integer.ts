/**
 * Roman to Integer
 *
 * Solved: Nov 04, 2022 23:57
 * @see https://leetcode.com/problems/roman-to-integer/submissions/837029934/
 */

const romanNumerals: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};

export function romanToInt(s: string): number {
    let result = 0;
    let lastChar = "";
    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i);

        if (lastChar == "I" && char == "V") {
            result += 3;
        } else if (lastChar == "I" && char == "X") {
            result += 8;
        } else if (lastChar == "X" && char == "L") {
            result += 30;
        } else if (lastChar == "X" && char == "C") {
            result += 80;
        } else if (lastChar == "C" && char == "D") {
            result += 300;
        } else if (lastChar == "C" && char == "M") {
            result += 800;
        } else {
            result += romanNumerals[char];
        }

        lastChar = char;
    }

    return result;
}
