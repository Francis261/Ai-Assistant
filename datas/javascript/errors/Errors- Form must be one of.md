# RangeError: form must be one of 'NFC', 'NFD', 'NFKC', or 'NFKD'

Source: https://devdocs.io/javascript/errors/form_must_be_one_of

The JavaScript exception "form must be one of 'NFC', 'NFD', 'NFKC', or 'NFKD'" occurs when an unrecognized string is passed to the String.prototype.normalize() method.

## Message

```
RangeError: The normalization form should be one of NFC, NFD, NFKC, NFKD. (V8-based)
RangeError: form must be one of 'NFC', 'NFD', 'NFKC', or 'NFKD' (Firefox)
RangeError: argument does not match any normalization form (Safari)
```

## Error type

## What went wrong?

The String.prototype.normalize() method only accepts the following four values as its form argument: "NFC", "NFD", "NFKC", or "NFKD". If you pass any other value, an error will be thrown. Read the reference of normalize() to learn about different normalization forms.

## Examples

### Invalid cases

```
"foo".normalize("nfc"); // RangeError
"foo".normalize(" NFC "); // RangeError
```

### Valid cases

```
"foo".normalize("NFC"); // 'foo'
```

## See also

- String.prototype.normalize()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Form_must_be_one_of
