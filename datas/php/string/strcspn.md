# strcspn

Source: https://devdocs.io/php/function.strcspn

(PHP 4, PHP 5, PHP 7, PHP 8)

strcspn — Find length of initial segment not matching mask

### Description

```
strcspn(
 string $string,
 string $characters,
 int $offset = 0,
 ?int $length = null
): int
```

Returns the length of the initial segment of string which does not contain any of the characters in characters.

If offset and length are omitted, then all of string will be examined. If they are included, then the effect will be the same as calling strcspn(substr($string, $offset, $length),
 $characters) (see substr for more information).

### Parameters

The string to examine.

The string containing every disallowed character.

The position in string to start searching.

If offset is given and is non-negative, then strcspn() will begin examining string at the offset'th position. For instance, in the string 'abcdef', the character at position 0 is 'a', the character at position 2 is 'c', and so forth.

If offset is given and is negative, then strcspn() will begin examining string at the offset'th position from the end of string.

The length of the segment from string to examine.

If length is given and is non-negative, then string will be examined for length characters after the starting position.

If length is given and is negative, then string will be examined from the starting position up to length characters from the end of string.

### Return Values

Returns the length of the initial segment of string which consists entirely of characters not in characters.

Note:

When a offset parameter is set, the returned length is counted starting from this position, not from the beginning of string.

### Changelog

### Examples

Example #1 strcspn() example

```
<?php
$a = strcspn('banana', 'a');
$b = strcspn('banana', 'abcd');
$c = strcspn('banana', 'z');
$d = strcspn('abcdhelloabcd', 'a', -9);
$e = strcspn('abcdhelloabcd', 'a', -9, -5);

var_dump($a);
var_dump($b);
var_dump($c);
var_dump($d);
var_dump($e);
?>
```

The above example will output:

```
int(1)
int(0)
int(6)
int(5)
int(4)
```

### Notes

Note: This function is binary-safe.

### See Also

- strspn() - Finds the length of the initial segment of a string consisting entirely of characters contained within a given mask

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.strcspn.php
