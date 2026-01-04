import { convertNumberToEnglishWords } from "./languages/en-SG";
import { convertNumberToKhmerWords } from "./languages/km-KH";

/**
 * Map all localization codes to internal converters.
 * You can easily add more later.
 */
const LANGUAGE_ROUTER: Record<string, (n: number) => string> = {
  // English variants
  "en": convertNumberToEnglishWords,
  "en-SG": convertNumberToEnglishWords,
  "en-PH": convertNumberToEnglishWords,

  // Khmer variants
  "km": convertNumberToKhmerWords,
  "km-KH": convertNumberToKhmerWords,
};

/**
 * Public API
 */
export function toWords(number: number, lang: string = "en-SG"): string {
  const key = lang.trim();

  const converter = LANGUAGE_ROUTER[key] || LANGUAGE_ROUTER[key.toLowerCase()] || null;

  if (!converter) {
    throw new Error(
      `Language "${lang}" is not supported yet. Supported languages: ${Object.keys(
        LANGUAGE_ROUTER
      ).join(", ")}`
    );
  }

  return converter(number);
}
