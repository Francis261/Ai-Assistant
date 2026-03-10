# IntlChar::charAge

Source: https://devdocs.io/php/intlchar.charage

(PHP 7, PHP 8)

IntlChar::charAge — Get the "age" of the code point

### Description

```
public static IntlChar::charAge(int|string $codepoint): ?array
```

Gets the "age" of the code point.

The "age" is the Unicode version when the code point was first designated (as a non-character or for Private Use) or assigned a character. This can be useful to avoid emitting code points to receiving processes that do not accept newer characters.

### Parameters

The int codepoint value (e.g. 0x2603 for U+2603 SNOWMAN), or the character encoded as a UTF-8 string (e.g. "\u{2603}")

### Return Values

The Unicode version number, as an array. For example, version 1.3.31.2 would be represented as [1, 3, 31, 2]. Returns null on failure.

### Examples

Example #1 Testing different code points

```
<?php
var_dump(IntlChar::charage("\u{2603}"));
var_dump(IntlChar::charage("\u{1F576}"));
?>
```

The above example will output:

```
array(4) {
  [0]=>
  int(1)
  [1]=>
  int(1)
  [2]=>
  int(0)
  [3]=>
  int(0)
}
array(4) {
  [0]=>
  int(7)
  [1]=>
  int(0)
  [2]=>
  int(0)
  [3]=>
  int(0)
}
```

### See Also

- IntlChar::getUnicodeVersion() - Get the Unicode version
- IntlChar::getIntPropertyMinValue() - Get the min value for a Unicode property
- IntlChar::getIntPropertyValue() - Get the value for a Unicode property for a code point

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlchar.charage.php
