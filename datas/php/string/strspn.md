# strspn

Source: https://devdocs.io/php/function.strspn

(PHP 4, PHP 5, PHP 7, PHP 8)

strspn — Finds the length of the initial segment of a string consisting entirely of characters contained within a given mask

### Description

```
strspn(
 string $string,
 string $characters,
 int $offset = 0,
 ?int $length = null
): int
```

Finds the length of the initial segment of string that contains only characters from characters.

If offset and length are omitted, then all of string will be examined. If they are included, then the effect will be the same as calling strspn(substr($string, $offset, $length),
 $characters) (see substr for more information).

The line of code:

```
<?php
$var = strspn("42 is the answer to the 128th question.", "1234567890");
?>
```

### Parameters

The string to examine.

The list of allowable characters.

The position in string to start searching.

If offset is given and is non-negative, then strspn() will begin examining string at the offset'th position. For instance, in the string 'abcdef', the character at position 0 is 'a', the character at position 2 is 'c', and so forth.

If offset is given and is negative, then strspn() will begin examining string at the offset'th position from the end of string.

The length of the segment from string to examine.

If length is given and is non-negative, then string will be examined for length characters after the starting position.

If length is given and is negative, then string will be examined from the starting position up to length characters from the end of string.

### Return Values

Returns the length of the initial segment of string which consists entirely of characters in characters.

Note:

When a offset parameter is set, the returned length is counted starting from this position, not from the beginning of string.

### Changelog

### Examples

Example #1 strspn() example

```
<?php
// subject does not start with any characters from mask
var_dump(strspn("foo", "o"));

// examine two characters from subject starting at offset 1
var_dump(strspn("foo", "o", 1, 2));

// examine one character from subject starting at offset 1
var_dump(strspn("foo", "o", 1, 1));
?>
```

The above example will output:

```
int(0)
int(2)
int(1)
```

### Notes

Note: This function is binary-safe.

### See Also

- strcspn() - Find length of initial segment not matching mask

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.strspn.php
