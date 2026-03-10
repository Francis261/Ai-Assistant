# IntlChar::isgraph

Source: https://devdocs.io/php/intlchar.isgraph

(PHP 7, PHP 8)

IntlChar::isgraph — Check if code point is a graphic character

### Description

```
public static IntlChar::isgraph(int|string $codepoint): ?bool
```

Determines whether the specified code point is a "graphic" character (printable, excluding spaces).

true for all characters except those with general categories "Cc" (control codes), "Cf" (format controls), "Cs" (surrogates), "Cn" (unassigned), and "Z" (separators).

### Parameters

The int codepoint value (e.g. 0x2603 for U+2603 SNOWMAN), or the character encoded as a UTF-8 string (e.g. "\u{2603}")

### Return Values

Returns true if codepoint is a "graphic" character, false if not. Returns null on failure.

### Examples

Example #1 Testing different code points

```
<?php
var_dump(IntlChar::isgraph("A"));
var_dump(IntlChar::isgraph("1"));
var_dump(IntlChar::isgraph("\u{2603}"));
var_dump(IntlChar::isgraph("\n"));
?>
```

The above example will output:

```
bool(true)
bool(true)
bool(true)
bool(false)
```

### See Also

- ctype_graph() - Check for any printable character(s) except space

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlchar.isgraph.php
