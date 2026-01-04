import { convertNumberToEnglishWords } from "../languages";

describe("Number to English Words", () => {
  test('converts 0 to "zero"', () => {
    expect(convertNumberToEnglishWords(0)).toBe("zero");
  });

  test("converts single digits", () => {
    expect(convertNumberToEnglishWords(5)).toBe("five");
    expect(convertNumberToEnglishWords(19)).toBe("nineteen");
  });

  test("converts tens correctly", () => {
    expect(convertNumberToEnglishWords(20)).toBe("twenty");
    expect(convertNumberToEnglishWords(42)).toBe("forty two");
    expect(convertNumberToEnglishWords(99)).toBe("ninety nine");
  });

  test("converts hundreds correctly", () => {
    expect(convertNumberToEnglishWords(100)).toBe("one hundred");
    expect(convertNumberToEnglishWords(123)).toBe("one hundred twenty three");
    expect(convertNumberToEnglishWords(999)).toBe("nine hundred ninety nine");
  });

  test("converts thousands and above", () => {
    expect(convertNumberToEnglishWords(1000)).toBe("one thousand");
    expect(convertNumberToEnglishWords(1234)).toBe(
      "one thousand two hundred thirty four"
    );
    expect(convertNumberToEnglishWords(1_000_000)).toBe("one million");
  });

  test("converts negative numbers", () => {
    expect(convertNumberToEnglishWords(-5)).toBe("negative five");
    expect(convertNumberToEnglishWords(-1234)).toBe(
      "negative one thousand two hundred thirty four"
    );
  });

  test("converts decimal numbers", () => {
    expect(convertNumberToEnglishWords(12.34)).toBe("twelve point three four");
    expect(convertNumberToEnglishWords(-0.56)).toBe(
      "negative zero point five six"
    );
  });
});
