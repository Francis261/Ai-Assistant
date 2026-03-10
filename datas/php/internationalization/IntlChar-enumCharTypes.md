# IntlChar::enumCharTypes

Source: https://devdocs.io/php/intlchar.enumchartypes

(PHP 7, PHP 8)

IntlChar::enumCharTypes — Enumerate all code points with their Unicode general categories

### Description

```
public static IntlChar::enumCharTypes(callable $callback): void
```

Enumerates efficiently all code points with their Unicode general categories. This is useful for building data structures, for enumerating all assigned code points, etc.

For each contiguous range of code points with a given general category ("character type"), the callback function is called. Adjacent ranges have different types. The Unicode Standard guarantees that the numeric value of the type is 0..31.

### Parameters

The function that is to be called for each contiguous range of code points with the same general category. The following three arguments will be passed into it:

- int $start - The starting code point of the range
- int $end - The ending code point of the range
- int $name - The category type (one of the IntlChar::CHAR_CATEGORY_* constants)

### Return Values

No value is returned.

### Examples

Example #1 Enumerating over a sample range of code points

```
<?php
IntlChar::enumCharTypes(function($start, $end, $type) {
    printf("U+%04x through U+%04x are in category %d\n", $start, $end, $type);
});
?>
```

The above example will output:

```
U+0000 through U+0020 are in category 15
U+0020 through U+0021 are in category 12
U+0021 through U+0024 are in category 23
U+0024 through U+0025 are in category 25
U+0025 through U+0028 are in category 23
U+0028 through U+0029 are in category 20
U+0029 through U+002a are in category 21
U+002a through U+002b are in category 23
U+002b through U+002c are in category 24
U+002c through U+002d are in category 23
U+002d through U+002e are in category 19
U+002e through U+0030 are in category 23
U+0030 through U+003a are in category 9
...
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlchar.enumchartypes.php
