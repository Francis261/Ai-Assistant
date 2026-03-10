# IntlChar::isMirrored

Source: https://devdocs.io/php/intlchar.ismirrored

(PHP 7, PHP 8)

IntlChar::isMirrored — Check if code point has the Bidi_Mirrored property

### Description

```
public static IntlChar::isMirrored(int|string $codepoint): ?bool
```

Determines whether the code point has the Bidi_Mirrored property.

This property is set for characters that are commonly used in Right-To-Left contexts and need to be displayed with a "mirrored" glyph.

### Parameters

The int codepoint value (e.g. 0x2603 for U+2603 SNOWMAN), or the character encoded as a UTF-8 string (e.g. "\u{2603}")

### Return Values

Returns true if codepoint has the Bidi_Mirrored property, false if not. Returns null on failure.

### Examples

Example #1 Testing different code points

```
<?php
var_dump(IntlChar::isMirrored("A"));
var_dump(IntlChar::isMirrored("<"));
var_dump(IntlChar::isMirrored("("));
?>
```

The above example will output:

```
bool(false)
bool(true)
bool(true)
```

### See Also

- IntlChar::charMirror() - Get the "mirror-image" character for a code point
- IntlChar::PROPERTY_BIDI_MIRRORED

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlchar.ismirrored.php
