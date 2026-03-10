# str_split

Source: https://devdocs.io/php/function.str-split

(PHP 5, PHP 7, PHP 8)

str_split — Convert a string to an array

### Description

```
str_split(string $string, int $length = 1): array
```

Converts a string to an array.

### Parameters

The input string.

Maximum length of the chunk.

### Return Values

If the optional length parameter is specified, the returned array will be broken down into chunks with each being length in length, except the final chunk which may be shorter if the string does not divide evenly. The default length is 1, meaning every chunk will be one byte in size.

### Errors/Exceptions

If length is less than 1, a ValueError will be thrown.

### Changelog

### Examples

Example #1 Example uses of str_split()

```
<?php

$str = "Hello Friend";

$arr1 = str_split($str);
$arr2 = str_split($str, 3);

print_r($arr1);
print_r($arr2);

?>
```

The above example will output:

```
Array
(
    [0] => H
    [1] => e
    [2] => l
    [3] => l
    [4] => o
    [5] =>
    [6] => F
    [7] => r
    [8] => i
    [9] => e
    [10] => n
    [11] => d
)

Array
(
    [0] => Hel
    [1] => lo
    [2] => Fri
    [3] => end
)
```

### Notes

Note:

str_split() will split into bytes, rather than characters when dealing with a multi-byte encoded string. mb_str_split() can be used to split the string into code points. grapheme_str_split() can be used to split the string into grapheme clusters.

### See Also

- mb_str_split() - Given a multibyte string, return an array of its characters
- grapheme_str_split() - Split a string into an array
- chunk_split() - Split a string into smaller chunks
- preg_split() - Split string by a regular expression
- explode() - Split a string by a string
- count_chars() - Return information about characters used in a string
- str_word_count() - Return information about words used in a string
- for

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.str-split.php
