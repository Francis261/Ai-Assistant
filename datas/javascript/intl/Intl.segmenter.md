# Intl.Segmenter

Source: https://devdocs.io/javascript/global_objects/intl/segmenter

The Intl.Segmenter object enables locale-sensitive text segmentation, enabling you to get meaningful items (graphemes, words or sentences) from a string.

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

## Constructor

Creates a new Intl.Segmenter object.

## Static methods

Returns an array containing those of the provided locales that are supported without having to fall back to the runtime's default locale.

## Instance properties

These properties are defined on Intl.Segmenter.prototype and shared by all Intl.Segmenter instances.

The constructor function that created the instance object. For Intl.Segmenter instances, the initial value is the Intl.Segmenter constructor.

The initial value of the [Symbol.toStringTag] property is the string "Intl.Segmenter". This property is used in Object.prototype.toString().

## Instance methods

Returns a new object with properties reflecting the locale and granularity options computed during initialization of this Intl.Segmenter object.

Returns a new iterable Segments instance representing the segments of a string according to the locale and granularity of this Intl.Segmenter instance.

## Examples

### Basic usage and difference from String.prototype.split()

If we were to use String.prototype.split(" ") to segment a text in words, we would not get the correct result if the locale of the text does not use whitespaces between words (which is the case for Japanese, Chinese, Thai, Lao, Khmer, Myanmar, etc.).

```
const str = "吾輩は猫である。名前はたぬき。";
console.table(str.split(" "));
// ['吾輩は猫である。名前はたぬき。']
// The two sentences are not correctly segmented.
```

```
const str = "吾輩は猫である。名前はたぬき。";
const segmenterJa = new Intl.Segmenter("ja-JP", { granularity: "word" });

const segments = segmenterJa.segment(str);
console.table(Array.from(segments));
// [{segment: '吾輩', index: 0, input: '吾輩は猫である。名前はたぬき。', isWordLike: true},
// etc.
// ]
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Intl.Segmenter in FormatJS
- Intl

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter
