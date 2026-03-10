# IntlChar::istitle

Source: https://devdocs.io/php/intlchar.istitle

(PHP 7, PHP 8)

IntlChar::istitle — Check if code point is a titlecase letter

### Description

```
public static IntlChar::istitle(int|string $codepoint): ?bool
```

Determines whether the specified code point is a titlecase letter.

true for general category "Lt" (titlecase letter).

### Parameters

The int codepoint value (e.g. 0x2603 for U+2603 SNOWMAN), or the character encoded as a UTF-8 string (e.g. "\u{2603}")

### Return Values

Returns true if codepoint is a titlecase letter, false if not. Returns null on failure.

### Examples

Example #1 Testing different code points

```
<?php
// Latin Capital Letter Dz with Caron U+01C4
var_dump(IntlChar::istitle("Ǆ"));
// Latin Capital Letter D with Small Letter Z with Caron U+01C5
var_dump(IntlChar::istitle("ǅ"));
// Latin Small Letter Dz with Caron U+01C6
var_dump(IntlChar::istitle("ǆ"));

// Greek Capital Letter Alpha with Prosgegrammeni U+1FBC
var_dump(IntlChar::istitle("ᾼ"));
// Greek Small Letter Alpha with Ypogegrammeni U+1FB3
var_dump(IntlChar::istitle("ᾳ"));
// Greek Capital Letter Alpha U+0391
var_dump(IntlChar::istitle("Α"));
?>
```

The above example will output:

```
bool(false)
bool(true)
bool(false)
bool(true)
bool(false)
bool(false)
```

### See Also

- IntlChar::isupper() - Check if code point has the general category "Lu" (uppercase letter)
- IntlChar::islower() - Check if code point is a lowercase letter
- IntlChar::totitle() - Make Unicode character titlecase

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlchar.istitle.php
