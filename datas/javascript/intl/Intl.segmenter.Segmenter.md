# Intl.Segmenter() constructor

Source: https://devdocs.io/javascript/global_objects/intl/segmenter/segmenter

The Intl.Segmenter() constructor creates Intl.Segmenter objects.

## Try it

```
const segmenterFr = new Intl.Segmenter("fr", { granularity: "word" });
const string = "Que ma joie demeure";

const iterator = segmenterFr.segment(string)[Symbol.iterator]();

console.log(iterator.next().value.segment);
// Expected output: 'Que'

console.log(iterator.next().value.segment);
// Expected output: ' '
```

## Syntax

```
new Intl.Segmenter()
new Intl.Segmenter(locales)
new Intl.Segmenter(locales, options)
```

Note: Intl.Segmenter() can only be constructed with new. Attempting to call it without new throws a TypeError.

### Parameters

A string with a BCP 47 language tag or an Intl.Locale instance, or an array of such locale identifiers. The runtime's default locale is used when undefined is passed or when none of the specified locale identifiers is supported. For the general form and interpretation of the locales argument, see the parameter description on the Intl main page.

An object containing the following properties, in the order they are retrieved (all of them are optional):

The locale matching algorithm to use. Possible values are "lookup" and "best fit"; the default is "best fit". For information about this option, see Locale identification and negotiation.

How granularly should the input be split. Possible values are:

Split the input into segments at grapheme cluster (user-perceived character) boundaries, as determined by the locale.

Split the input into segments at word boundaries, as determined by the locale.

Split the input into segments at sentence boundaries, as determined by the locale.

### Return value

A new Intl.Segmenter instance.

### Exceptions

Thrown if locales or options contain invalid values.

## Examples

### Basic usage

The following example shows how to count words in a string using the Japanese language (where splitting the string using String methods would have given an incorrect result).

```
const text = "吾輩は猫である。名前はたぬき。";
const japaneseSegmenter = new Intl.Segmenter("ja-JP", { granularity: "word" });
console.log(
  [...japaneseSegmenter.segment(text)].filter((segment) => segment.isWordLike)
    .length,
);
// 8, as the text is segmented as '吾輩'|'は'|'猫'|'で'|'ある'|'。'|'名前'|'は'|'たぬき'|'。'
```

## Specifications

## Browser compatibility

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/Segmenter
