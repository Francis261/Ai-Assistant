# str_ireplace

Source: https://devdocs.io/php/function.str-ireplace

(PHP 5, PHP 7, PHP 8)

str_ireplace — Case-insensitive version of str_replace()

### Description

```
str_ireplace(
 array|string $search,
 array|string $replace,
 string|array $subject,
 int &$count = null
): string|array
```

This function returns a string or an array with all occurrences of search in subject (ignoring case) replaced with the given replace value.

To replace text based on a pattern rather than a fixed string, use preg_replace() with the i pattern modifier.

### Parameters

If search and replace are arrays, then str_ireplace() takes a value from each array and uses them to search and replace on subject. If replace has fewer values than search, then an empty string is used for the rest of replacement values. If search is an array and replace is a string, then this replacement string is used for every value of search. The converse would not make sense, though.

If search or replace are arrays, their elements are processed first to last.

The value being searched for, otherwise known as the needle. An array may be used to designate multiple needles.

The replacement value that replaces found search values. An array may be used to designate multiple replacements.

The string or array being searched and replaced on, otherwise known as the haystack.

If subject is an array, then the search and replace is performed with every entry of subject, and the return value is an array as well.

If passed, this will be set to the number of replacements performed.

### Return Values

Returns a string or an array of replacements.

### Changelog

### Examples

Example #1 str_ireplace() example

```
<?php
$bodytag = str_ireplace("%body%", "black", "<body text=%BODY%>");
echo $bodytag; // <body text=black>
?>
```

### Notes

Note: This function is binary-safe.

# Replacement order gotcha

Because str_ireplace() replaces left to right, it might replace a previously inserted value when doing multiple replacements. Example #2 in the str_replace() documentation demonstrates how this may affect you in practice.

### See Also

- str_replace() - Replace all occurrences of the search string with the replacement string
- preg_replace() - Perform a regular expression search and replace
- strtr() - Translate characters or replace substrings

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.str-ireplace.php
