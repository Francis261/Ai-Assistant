# Segments.prototype.containing()

Source: https://devdocs.io/javascript/global_objects/intl/segmenter/segment/segments/containing

The containing() method of Segments instances returns an object describing the segment in the string that includes the code unit at the specified index.

## Try it

```
const segmenterFr = new Intl.Segmenter("fr", { granularity: "word" });
const string = "Que ma joie demeure";

const segments = segmenterFr.segment(string);

console.log(segments.containing(5));
// Expected output:
// Object {segment: 'ma', index: 4, input: 'Que ma joie demeure', isWordLike: true}
```

## Syntax

```
containing(codeUnitIndex)
```

### Parameters

A number specifying the index of the code unit in the original input string. If the value is omitted, it defaults to 0.

### Return value

An object describing the segment of the original string with the following properties, or undefined if the supplied index value is out of bounds.

A string containing the segment extracted from the original input string.

The code unit index in the original input string at which the segment begins.

The complete input string that was segmented.

A boolean value only if granularity is "word"; otherwise, undefined. If granularity is "word", then isWordLike is true when the segment is word-like (i.e., consists of letters/numbers/ideographs/etc.); otherwise, false.

## Examples

```
// ┃0 1 2 3 4 5┃6┃7┃8┃9  ← code unit index
// ┃A l l o n s┃-┃y┃!┃   ← code unit
const input = "Allons-y!";

const segmenter = new Intl.Segmenter("fr", { granularity: "word" });
const segments = segmenter.segment(input);

let current = segments.containing();
// { index: 0, segment: "Allons", isWordLike: true }

current = segments.containing(4);
// { index: 0, segment: "Allons", isWordLike: true }

current = segments.containing(6);
// { index: 6, segment: "-", isWordLike: false }

current = segments.containing(current.index + current.segment.length);
// { index: 7, segment: "y", isWordLike: true }

current = segments.containing(current.index + current.segment.length);
// { index: 8, segment: "!", isWordLike: false }

current = segments.containing(current.index + current.segment.length);
// undefined
```

## Specifications

## Browser compatibility

## See also

- Intl.Segmenter
- Intl.Segmenter.prototype.segment()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments/containing
