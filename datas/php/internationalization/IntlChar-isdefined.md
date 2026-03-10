# IntlChar::isdefined

Source: https://devdocs.io/php/intlchar.isdefined

(PHP 7, PHP 8)

IntlChar::isdefined — Check whether the code point is defined

### Description

```
public static IntlChar::isdefined(int|string $codepoint): ?bool
```

Determines whether the specified code point is "defined", which usually means that it is assigned a character.

true for general categories other than "Cn" (other, not assigned).

Note:

Note that non-character code points (e.g., U+FDD0) are not "defined" (they are Cn), but surrogate code points are "defined" (Cs).

### Parameters

The int codepoint value (e.g. 0x2603 for U+2603 SNOWMAN), or the character encoded as a UTF-8 string (e.g. "\u{2603}")

### Return Values

Returns true if codepoint is a defined character, false if not. Returns null on failure.

### Examples

Example #1 Testing different code points

```
<?php
var_dump(IntlChar::isdefined("A"));
var_dump(IntlChar::isdefined(" "));
var_dump(IntlChar::isdefined("\u{FDD0}"));
?>
```

The above example will output:

```
bool(true)
bool(true)
bool(false)
```

### See Also

- IntlChar::isdigit() - Check if code point is a digit character
- IntlChar::isalpha() - Check if code point is a letter character
- IntlChar::isalnum() - Check if code point is an alphanumeric character
- IntlChar::isupper() - Check if code point has the general category "Lu" (uppercase letter)
- IntlChar::islower() - Check if code point is a lowercase letter
- IntlChar::istitle() - Check if code point is a titlecase letter

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlchar.isdefined.php
