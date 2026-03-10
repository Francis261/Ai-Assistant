# IntlChar::isISOControl

Source: https://devdocs.io/php/intlchar.isisocontrol

(PHP 7, PHP 8)

IntlChar::isISOControl — Check if code point is an ISO control code

### Description

```
public static IntlChar::isISOControl(int|string $codepoint): ?bool
```

Determines whether the specified code point is an ISO control code.

true for U+0000..U+001f and U+007f..U+009f (general category "Cc").

### Parameters

The int codepoint value (e.g. 0x2603 for U+2603 SNOWMAN), or the character encoded as a UTF-8 string (e.g. "\u{2603}")

### Return Values

Returns true if codepoint is an ISO control code, false if not. Returns null on failure.

### Examples

Example #1 Testing different code points

```
<?php
var_dump(IntlChar::isISOControl(" "));
var_dump(IntlChar::isISOControl("\n"));
var_dump(IntlChar::isISOControl("\u{200e}"));
?>
```

The above example will output:

```
bool(false)
bool(true)
bool(false)
```

### See Also

- IntlChar::iscntrl() - Check if code point is a control character

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlchar.isisocontrol.php
