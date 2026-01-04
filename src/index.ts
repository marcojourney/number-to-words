import { languageModules } from "./languages";

export function toWords(number: number, lang: string = "en"): string {
  const module = languageModules[lang];
  if (!module) {
    throw new Error(`Language "${lang}" is not supported yet.`);
  }
  return module.convert(number);
}
