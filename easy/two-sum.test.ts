import { twoSum } from "./two-sum";

describe("Should return the indices of the two numbers that add up to the target", () => {
    it("Should return [0, 1] for [2, 7, 11, 15] and 9 as target", () => {
        expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    });
    it("Should return [1, 2] for [3, 2, 4] and 6 as target", () => {
        expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
    });
    it("Should return [0, 1] for [3, 3] and 6 as target", () => {
        expect(twoSum([3, 3], 6)).toEqual([0, 1]);
    });
});
