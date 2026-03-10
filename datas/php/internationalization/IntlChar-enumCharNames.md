# IntlChar::enumCharNames

Source: https://devdocs.io/php/intlchar.enumcharnames

(PHP 7, PHP 8)

IntlChar::enumCharNames — Enumerate all assigned Unicode characters within a range

### Description

```
public static IntlChar::enumCharNames(
 int|string $start,
 int|string $end,
 callable $callback,
 int $type = IntlChar::UNICODE_CHAR_NAME
): bool
```

Enumerate all assigned Unicode characters between the start and limit code points (start inclusive, limit exclusive) and call a function for each, passing the code point value and the character name.

For Unicode 1.0 names, only those are enumerated that differ from the modern names.

### Parameters

The first code point in the enumeration range.

One more than the last code point in the enumeration range (the first one after the range).

The function that is to be called for each character name. The following three arguments will be passed into it:

- int $codepoint - The numeric code point value
- int $nameChoice - The same value as the type parameter below
- string $name - The name of the character

Selector for which kind of names to enumerate. Can be any of these constants:

- IntlChar::UNICODE_CHAR_NAME (default)
- IntlChar::UNICODE_10_CHAR_NAME
- IntlChar::EXTENDED_CHAR_NAME
- IntlChar::CHAR_NAME_ALIAS
- IntlChar::CHAR_NAME_CHOICE_COUNT

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 Enumerating over a sample range of code points

```
<?php
IntlChar::enumCharNames(0x2600, 0x2610, function($codepoint, $nameChoice, $name) {
    printf("U+%04x %s\n", $codepoint, $name);
});
?>
```

The above example will output:

```
U+2600 BLACK SUN WITH RAYS
U+2601 CLOUD
U+2602 UMBRELLA
U+2603 SNOWMAN
U+2604 COMET
U+2605 BLACK STAR
U+2606 WHITE STAR
U+2607 LIGHTNING
U+2608 THUNDERSTORM
U+2609 SUN
U+260a ASCENDING NODE
U+260b DESCENDING NODE
U+260c CONJUNCTION
U+260d OPPOSITION
U+260e BLACK TELEPHONE
U+260f WHITE TELEPHONE
```

### See Also

- IntlChar::charName() - Retrieve the name of a Unicode character
- IntlChar::charFromName() - Find Unicode character by name and return its code point value

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlchar.enumcharnames.php
