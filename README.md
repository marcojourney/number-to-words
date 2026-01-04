# number-to-words

Convert numbers to words easily. Currently supports **English (`en`)** and **Khmer (Cambodia, `km`)**.

> **Note:** Support for additional languages will be added in future releases.

## Installation

```bash
npm install number-to-words
```

## Usage

```ts
import { toWords } from 'number-to-words';

// English
console.log(toWords(123, 'en')); // "One Hundred and Twenty Three"

// Khmer
console.log(toWords(123, 'km')); // "មួយរយម្ភៃបី"
```

---

## Example with Countries (Asia)

| Country          | Language Code | Example: `123`               |
| ---------------- | ------------- | ---------------------------- |
| Cambodia 🇰🇭      | `km`          | មួយរយម្ភៃបី                      |
| Vietnam 🇻🇳       | `vi`          | (not supported yet)          |
| Laos 🇱🇦          | `lo`          | (not supported yet)          |
| Myanmar 🇲🇲       | `my`          | (not supported yet)          |
| Malaysia 🇲🇾      | `ms`          | (not supported yet)          |
| Singapore 🇸🇬     | `en`          | One Hundred and Twenty Three |
| Indonesia 🇮🇩     | `id`          | (not supported yet)          |
| Philippines 🇵🇭   | `en`          | One Hundred and Twenty Three |
| Japan 🇯🇵         | `ja`          | (not supported yet)          |
| South Korea 🇰🇷   | `ko`          | (not supported yet)          |
| Thailand 🇹🇭      | `th`          | (not supported yet)          |

---

## Example with Real Data

```ts
import { toWords } from 'number-to-words';

const populationCambodia = 181035; // Area in km²
console.log(`Area of Cambodia: ${toWords(populationCambodia, 'en')} square kilometers`);
// "Area of Cambodia: One Hundred Eighty-One Thousand Thirty-Five square kilometers"

console.log(`ទំហំប្រទេសកម្ពុជា: ${toWords(populationCambodia, 'km')} គីឡូម៉ែត្រការេ`);
// "ផ្ទៃដីប្រទេសកម្ពុជា: មួយរយប៉ែតសិបមួយពាន់សូន្យសាមសិបប្រាំ គីឡូម៉ែត្រការេ"
```

---

## API

```ts
toWords(number: number, lang: string): string
```

* `number` → The number you want to convert
* `lang` → Language code (`'en'` or `'km'`)

> Currently, only **English (`en`)** and **Khmer (`km`)** are supported.

---

## Contribution

Contributions are welcome! If you want to help add **more Asian languages**, feel free to submit a PR.

---
