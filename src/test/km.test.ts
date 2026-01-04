import { convertNumberToKhmerWords } from "../languages";

describe("Number to Khmer Words", () => {
  test("converts 0 to empty string", () => {
    expect(convertNumberToKhmerWords(0)).toBe("សូន្យ");
  });

  test("converts single digits", () => {
    expect(convertNumberToKhmerWords(1)).toBe("មួយ");
    expect(convertNumberToKhmerWords(19)).toBe("ដប់ប្រាំបួន");
  });

  test("converts tens correctly", () => {
    expect(convertNumberToKhmerWords(20)).toBe("ម្ភៃ");
    expect(convertNumberToKhmerWords(42)).toBe("សែសិបពីរ");
    expect(convertNumberToKhmerWords(99)).toBe("កៅសិបប្រាំបួន");
  });

  test("converts hundreds correctly", () => {
    expect(convertNumberToKhmerWords(100)).toBe("មួយរយ");
    expect(convertNumberToKhmerWords(123)).toBe("មួយរយម្ភៃបី");
    expect(convertNumberToKhmerWords(999)).toBe("ប្រាំបួនរយកៅសិបប្រាំបួន");
  });

  test("converts thousands and above", () => {
    expect(convertNumberToKhmerWords(1000)).toBe("មួយពាន់");
    expect(convertNumberToKhmerWords(1234)).toBe("មួយពាន់ពីររយសាមសិបបួន");
    expect(convertNumberToKhmerWords(1_000_000)).toBe("មួយលាន");
  });

  test("converts decimal numbers", () => {
    expect(convertNumberToKhmerWords(12.34)).toBe("ដប់ពីរចុចសាមសិបបួន");
    expect(convertNumberToKhmerWords(0.56)).toBe("សូន្យចុចហាសិបប្រាំមួយ");
  });
});
