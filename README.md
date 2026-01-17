# Convert Number to Words

Convert numbers to words easily. Currently supports **English (`en-SG`)** and **Khmer (Cambodia, `km-KH`)**.

> **Note:** Support for additional languages will be added in future releases.

## Installation

```bash
npm install @marcobytes/num-to-text
```

## Usage

```ts
import { toWords } from '@marcobytes/num-to-text';

// English
console.log(toWords(181035, 'en-SG')); // "One Hundred and Eighty-One Thousand and Thirty-Five"

// Khmer
console.log(toWords(181035, 'km-KH')); // "មួយរយប៉ែតសិបមួយពាន់សូន្យសាមសិបប្រាំ"
```

---

## Example with Countries (Asia)

| Country          | Language Code | Example: `181035`                                   |
| ---------------- | ------------- | --------------------------------------------------- |
| Cambodia 🇰🇭      | `km-KH`       | មួយរយប៉ែតសិបមួយពាន់សូន្យសាមសិបប្រាំ                          |
| Vietnam 🇻🇳       | `vi-VN`       | (not supported yet)                                 |
| Laos 🇱🇦          | `lo-LA`       | (not supported yet)                                 |
| Myanmar 🇲🇲       | `my-MM`       | (not supported yet)                                 |
| Malaysia 🇲🇾      | `ms-MY`       | (not supported yet)                                 |
| Singapore 🇸🇬     | `en-SG`       | One Hundred and Eighty-One Thousand and Thirty-Five |
| Indonesia 🇮🇩     | `id-ID`       | (not supported yet)                                 |
| Philippines 🇵🇭   | `en-PH`       | One Hundred and Eighty-One Thousand and Thirty-Five |
| Japan 🇯🇵         | `ja-JP`       | (not supported yet)                                 |
| South Korea 🇰🇷   | `ko-KR`       | (not supported yet)                                 |
| Thailand 🇹🇭      | `th-TH`       | (not supported yet)                                 |


---

## Example with Real Data

```ts
import { toWords } from '@marcobytes/num-to-text';

const populationCambodia = 181035; // Area in km²
console.log(`Area of Cambodia: ${toWords(populationCambodia, 'en-SG')} square kilometers`);
// "Area of Cambodia: One Hundred Eighty-One Thousand Thirty-Five square kilometers"

console.log(`ផ្ទៃដីប្រទេសកម្ពុជា: ${toWords(populationCambodia, 'km-KH')} គីឡូម៉ែត្រការេ`);
// "ផ្ទៃដីប្រទេសកម្ពុជា: មួយរយប៉ែតសិបមួយពាន់សូន្យសាមសិបប្រាំ គីឡូម៉ែត្រការេ"
```

---

## API

```ts
toWords(number: number, lang: string): string
```

* `number` → The number you want to convert
* `lang` → Language code (`'en-SG'` or `'km-KH'`)

> Currently, only **English (`en-SG`)** and **Khmer (`km`)** are supported.

---

## Contribution

Contributions are welcome! If you want to help add **more Asian languages**, feel free to submit a PR.

---
