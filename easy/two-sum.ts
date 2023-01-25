/**
 * Two Sum
 *
 * Solved: Nov 05, 2022 12:52
 * @see https://leetcode.com/problems/two-sum/submissions/837313679/
 */

function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        const firstNum = nums[i];
        for (let j = 0; j < nums.length; j++) {
            const secondNum = nums[j];
            if (firstNum + secondNum == target && i != j) {
                return [i, j];
            }
        }
    }

    return [];
}
