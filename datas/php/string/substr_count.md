# substr_count

Source: https://devdocs.io/php/function.substr-count

(PHP 4, PHP 5, PHP 7, PHP 8)

substr_count — Count the number of substring occurrences

### Description

```
substr_count(
 string $haystack,
 string $needle,
 int $offset = 0,
 ?int $length = null
): int
```

substr_count() returns the number of times the needle substring occurs in the haystack string. Please note that needle is case sensitive.

Note:

This function doesn't count overlapped substrings. See the example below!

### Parameters

The string to search in

The substring to search for

The offset where to start counting. If the offset is negative, counting starts from the end of the string.

The maximum length after the specified offset to search for the substring. It outputs a warning if the offset plus the length is greater than the haystack length. A negative length counts from the end of haystack.

### Return Values

This function returns an int.

### Changelog

### Examples

Example #1 A substr_count() example

```
<?php
$text = 'This is a test';
echo strlen($text), PHP_EOL; // 14

echo substr_count($text, 'is'), PHP_EOL; // 2

// the string is reduced to 's is a test', so it prints 1
echo substr_count($text, 'is', 3), PHP_EOL;

// the text is reduced to 's i', so it prints 0
echo substr_count($text, 'is', 3, 3), PHP_EOL;

// prints only 1, because it doesn't count overlapped substrings
$text2 = 'gcdgcdgcd';
echo substr_count($text2, 'gcdgcd'), PHP_EOL;

// throws an exception because 5+10 > 14
echo substr_count($text, 'is', 5, 10), PHP_EOL;
?>
```

### See Also

- count_chars() - Return information about characters used in a string
- strpos() - Find the position of the first occurrence of a substring in a string
- substr() - Return part of a string
- strstr() - Find the first occurrence of a string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.substr-count.php
