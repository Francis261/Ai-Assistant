# IntlChar::charFromName

Source: https://devdocs.io/php/intlchar.charfromname

(PHP 7, PHP 8)

IntlChar::charFromName — Find Unicode character by name and return its code point value

### Description

```
public static IntlChar::charFromName(string $name, int $type = IntlChar::UNICODE_CHAR_NAME): ?int
```

Finds a Unicode character by its name and returns its code point value.

The name is matched exactly and completely. If the name does not correspond to a code point, null is returned.

A Unicode 1.0 name is matched only if it differs from the modern name. Unicode names are all uppercase. Extended names are lowercase followed by an uppercase hexadecimal number, and within angle brackets.

### Parameters

Full name of the Unicode character.

Which set of names to use for the lookup. Can be any of these constants:

- IntlChar::UNICODE_CHAR_NAME (default)
- IntlChar::UNICODE_10_CHAR_NAME
- IntlChar::EXTENDED_CHAR_NAME
- IntlChar::CHAR_NAME_ALIAS
- IntlChar::CHAR_NAME_CHOICE_COUNT

### Return Values

The Unicode value of the code point with the given name (as an int), or null if there is no such code point.

### Examples

Example #1 Testing different code points

```
<?php
var_dump(IntlChar::charFromName("LATIN CAPITAL LETTER A"));
var_dump(IntlChar::charFromName("SNOWMAN"));
var_dump(IntlChar::charFromName("RECYCLING SYMBOL FOR TYPE-1 PLASTICS"));
var_dump(IntlChar::charFromName("A RANDOM STRING WHICH DOESN'T CORRESPOND TO ANY UNICODE CHARACTER"));
?>
```

The above example will output:

```
int(65)
int(9731)
int(9843)
NULL
```

### See Also

- IntlChar::charName() - Retrieve the name of a Unicode character
- IntlChar::enumCharNames() - Enumerate all assigned Unicode characters within a range

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlchar.charfromname.php
