export function convertNumberToKhmerWords(number: number | string): string {
  const hyphen = "";
  const conjunction = "";
  const separator = "";
  const negative = "negative ";
  const decimal = "ចុច";

  const dictionary: Record<number, string> = {
    0: "សូន្យ",
    1: "មួយ",
    2: "ពីរ",
    3: "បី",
    4: "បួន",
    5: "ប្រាំ",
    6: "ប្រាំមួយ",
    7: "ប្រាំពីរ",
    8: "ប្រាំបី",
    9: "ប្រាំបួន",
    10: "ដប់",
    11: "ដប់មួយ",
    12: "ដប់ពីរ",
    13: "ដប់បី",
    14: "ដប់បួន",
    15: "ដប់ប្រាំ",
    16: "ដប់ប្រាំមួយ",
    17: "ដប់ប្រាំពីរ",
    18: "ដប់ប្រាំបី",
    19: "ដប់ប្រាំបួន",
    20: "ម្ភៃ",
    30: "សាមសិប",
    40: "សែសិប",
    50: "ហាសិប",
    60: "ហុកសិប",
    70: "ចិតសិប",
    80: "ប៉ែតសិប",
    90: "កៅសិប",
    100: "រយ",
    1000: "ពាន់",
    1_000_000: "លាន"
  };

  if (typeof number === "string") number = parseFloat(number);

  if (isNaN(number)) return "";

  if (number < 0) return negative + convertNumberToKhmerWords(Math.abs(number));

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
    string = dictionary[hundreds]! + dictionary[100];
    if (remainder) string += conjunction + convertNumberToKhmerWords(remainder);
  } else {
    const baseUnit = Math.pow(
      1000,
      Math.floor(Math.log(number) / Math.log(1000))
    );
    const numBaseUnits = Math.floor(number / baseUnit);
    const remainder = number % baseUnit;
    string =
      convertNumberToKhmerWords(numBaseUnits) +
      dictionary[baseUnit as keyof typeof dictionary];
    if (remainder)
      string +=
        remainder < 100
          ? conjunction
          : separator + convertNumberToKhmerWords(remainder);
  }

  if (fraction) {
    if (string === "") string = "0";
    string += decimal + convertNumberToKhmerWords(fraction);
  }

  return string;
}
