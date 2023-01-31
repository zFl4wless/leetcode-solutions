import { romanToInt } from "./roman-to-integer";

describe("Should return the number equivalent of the roman numeral", () => {
    it("Should return 3 for III", () => {
        expect(romanToInt("III")).toBe(3);
    });
    it("Should return 58 for LVIII", () => {
        expect(romanToInt("LVIII")).toBe(58);
    });
    it("Should return 1994 for MCMXCIV", () => {
        expect(romanToInt("MCMXCIV")).toBe(1994);
    });
});
