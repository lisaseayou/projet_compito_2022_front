// import { formatDate } from "./index";
import { firstLetterUpperCase, getNumberItems } from "./index";

// describe("formatDate", () => {
//   describe("the date is correct", () => {
//     it("returns date to format Locale fr", () => {
//       expect(formatDate).toBe("09 Décembre 2022");
//     });
//   });
// });

describe("helpers", () => {
  describe("function firstLetterUpperCase", () => {
    it("return first letter is Uppercase", () => {
      expect(firstLetterUpperCase("fleur")).toEqual("Fleur");
    });
  });

  describe("function getNumberItems", () => {
    const a = [
      { id: 1, name: "hello" },
      { id: 2, name: "bye" },
    ];

    it("return number of items with brakets", () => {
      expect(getNumberItems(a, true)).toEqual("(2)");
    });

    it("return number of items without brakets", () => {
      expect(getNumberItems(a, false)).toEqual(2);
    });
    
    it("return bad number", () => {
      expect(getNumberItems(a, false)).not.toEqual(5);
    });
  });
});
