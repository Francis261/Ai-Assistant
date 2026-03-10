# preg_split

Source: https://devdocs.io/php/function.preg-split

(PHP 4, PHP 5, PHP 7, PHP 8)

preg_split — Split string by a regular expression

### Description

```
preg_split(
 string $pattern,
 string $subject,
 int $limit = -1,
 int $flags = 0
): array|false
```

Split the given string by a regular expression.

### Parameters

The pattern to search for, as a string.

The input string.

If specified, then only substrings up to limit are returned with the rest of the string being placed in the last substring. A limit of -1 or 0 means "no limit".

flags can be any combination of the following flags (combined with the | bitwise operator):

If this flag is set, for every occurring match the appendant string offset will also be returned. Note that this changes the return value in an array where every element is an array consisting of the matched string at offset 0 and its string offset into subject at offset 1.

### Return Values

Returns an array containing substrings of subject split along boundaries matched by pattern, or false on failure.

### Errors/Exceptions

If the regex pattern passed does not compile to a valid regex, an E_WARNING is emitted.

### Examples

Example #1 preg_split() example : Get the parts of a search string

```
<?php
// split the phrase by any number of commas or space characters,
// which include " ", \r, \t, \n and \f
$keywords = preg_split("/[\s,]+/", "hypertext language, programming");
print_r($keywords);
?>
```

The above example will output:

```
Array
(
    [0] => hypertext
    [1] => language
    [2] => programming
)
```

Example #2 Splitting a string into component characters

```
<?php
$str = 'string';
$chars = preg_split('//', $str, -1, PREG_SPLIT_NO_EMPTY);
print_r($chars);
?>
```

The above example will output:

```
Array
(
    [0] => s
    [1] => t
    [2] => r
    [3] => i
    [4] => n
    [5] => g
)
```

Example #3 Splitting a string into matches and their offsets

```
<?php
$str = 'hypertext language programming';
$chars = preg_split('/ /', $str, -1, PREG_SPLIT_OFFSET_CAPTURE);
print_r($chars);
?>
```

The above example will output:

```
Array
(
    [0] => Array
        (
            [0] => hypertext
            [1] => 0
        )

    [1] => Array
        (
            [0] => language
            [1] => 10
        )

    [2] => Array
        (
            [0] => programming
            [1] => 19
        )

)
```

### Notes

If you don't need the power of regular expressions, you can choose faster (albeit simpler) alternatives like explode() or str_split().

If matching fails, an array with a single element containing the input string will be returned.

### See Also

- PCRE Patterns
- preg_quote() - Quote regular expression characters
- explode() - Split a string by a string
- preg_match() - Perform a regular expression match
- preg_match_all() - Perform a global regular expression match
- preg_replace() - Perform a regular expression search and replace
- preg_last_error() - Returns the error code of the last PCRE regex execution

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.preg-split.php
