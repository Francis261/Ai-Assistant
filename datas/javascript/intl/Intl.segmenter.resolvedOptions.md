# Intl.Segmenter.prototype.resolvedOptions()

Source: https://devdocs.io/javascript/global_objects/intl/segmenter/resolvedoptions

The resolvedOptions() method of Intl.Segmenter instances returns a new object with properties reflecting the options computed during initialization of this Segmenter object.

## Try it

```
const segmenter = new Intl.Segmenter("fr-FR");
const options = segmenter.resolvedOptions();

console.log(options.locale);
// Expected output: "fr-FR"

console.log(options.granularity);
// Expected output: "grapheme"
```

## Syntax

```
resolvedOptions()
```

### Parameters

None.

### Return value

A new object with properties reflecting the options computed during the initialization of this Segmenter object. The object has the following properties, in the order they are listed:

The BCP 47 language tag for the locale actually used, determined by the locale negotiation process. No Unicode extension key will be included in the output.

The value provided for this property in the options argument, with default filled in as needed. It is either "grapheme", "word", or "sentence". The default is "grapheme".

## Examples

### Basic usage

```
const spanishSegmenter = new Intl.Segmenter("es", { granularity: "sentence" });
const options = spanishSegmenter.resolvedOptions();
console.log(options.locale); // "es"
console.log(options.granularity); // "sentence"
```

### Default granularity

```
const spanishSegmenter = new Intl.Segmenter("es");
const options = spanishSegmenter.resolvedOptions();
console.log(options.locale); // "es"
console.log(options.granularity); // "grapheme"
```

### Fallback locale

```
const banSegmenter = new Intl.Segmenter("ban");
const options = banSegmenter.resolvedOptions();
console.log(options.locale);
// "fr" on a runtime where the Balinese locale
// is not supported and French is the default locale
console.log(options.granularity); // "grapheme"
```

## Specifications

## Browser compatibility

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/resolvedOptions
