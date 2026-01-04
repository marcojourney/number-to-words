// src/languages/en.ts
export function convertNumberToEnglishWords(number: number | string): string {
  const hyphen = " ";
  const conjunction = " ";
  const separator = " ";
  const negative = "negative ";
  const decimal = " point ";

  const dictionary: Record<number, string> = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
    100: "hundred",
    1000: "thousand",
    1_000_000: "million",
    1_000_000_000: "billion",
    1_000_000_000_000: "trillion",
  };

  if (typeof number === "string") number = parseFloat(number);

  if (isNaN(number)) return "";

  if (number < 0)
    return negative + convertNumberToEnglishWords(Math.abs(number));

  let string = "";
  let fraction: string | null = null;

  let numberStr = number.toString();
  if (numberStr.includes(".")) {
    [numberStr, fraction] = numberStr.split(".");
    number = parseInt(numberStr);
  }

  if (number < 21) {
    string = dictionary[number]!;
  } else if (number < 100) {
    const tens = Math.floor(number / 10) * 10;
    const units = number % 10;
    string = dictionary[tens]!;
    if (units) string += hyphen + dictionary[units];
  } else if (number < 1000) {
    const hundreds = Math.floor(number / 100);
    const remainder = number % 100;
    string = dictionary[hundreds]! + " " + dictionary[100];
    if (remainder)
      string += conjunction + convertNumberToEnglishWords(remainder);
  } else {
    const baseUnit = Math.pow(
      1000,
      Math.floor(Math.log(number) / Math.log(1000))
    );
    const numBaseUnits = Math.floor(number / baseUnit);
    const remainder = number % baseUnit;
    string =
      convertNumberToEnglishWords(numBaseUnits) +
      " " +
      dictionary[baseUnit as keyof typeof dictionary];
    if (remainder)
      string +=
        remainder < 100
          ? conjunction
          : separator + convertNumberToEnglishWords(remainder);
  }

  if (fraction) {
    string +=
      decimal +
      fraction
        .split("")
        .map((d) => dictionary[parseInt(d)])
        .join(" ");
  }

  return string;
}
