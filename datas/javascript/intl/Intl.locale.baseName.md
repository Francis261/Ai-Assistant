# Intl.Locale.prototype.baseName

Source: https://devdocs.io/javascript/global_objects/intl/locale/basename

The baseName accessor property of Intl.Locale instances returns a substring of this locale's string representation, containing core information about this locale, including the language, script, region, and variants, if available.

## Description

baseName returns the language ["-" script] ["-" region] *("-" variant) subsequence of the unicode_language_id grammar. It only includes information explicitly specified in the constructor, either through the locale identifier string or the options object.

The set accessor of baseName is undefined. You cannot change this property directly.

## Examples

### Basic example

```
const myLoc = new Intl.Locale("fr-Latn-CA"); // Sets locale to Canadian French
console.log(myLoc.toString()); // "fr-Latn-CA-u-ca-gregory"
console.log(myLoc.baseName); // "fr-Latn-CA"
```

### Example with extension tags in the input string

```
// Sets language to Japanese, region to Japan,
// calendar to Gregorian, hour cycle to 24 hours
const japan = new Intl.Locale("ja-JP-u-ca-gregory-hc-24");
console.log(japan.toString()); // "ja-JP-u-ca-gregory-hc-h24"
console.log(japan.baseName); // "ja-JP"
```

### Example with options that override input string

```
// Input string indicates language as Dutch and region as Belgium,
// but options object overrides the region and sets it to the Netherlands
const dutch = new Intl.Locale("nl-Latn-BE", { region: "NL" });

console.log(dutch.baseName); // "nl-Latn-NL"
```

## Specifications

## Browser compatibility

## See also

- Intl.Locale

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/baseName
