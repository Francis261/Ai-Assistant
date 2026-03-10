# str_repeat

Source: https://devdocs.io/php/function.str-repeat

(PHP 4, PHP 5, PHP 7, PHP 8)

str_repeat — Repeat a string

### Description

```
str_repeat(string $string, int $times): string
```

Returns string repeated times times.

### Parameters

The string to be repeated.

Number of time the string string should be repeated.

times has to be greater than or equal to 0. If the times is set to 0, the function will return an empty string.

### Return Values

Returns the repeated string.

### Examples

Example #1 str_repeat() example

```
<?php
echo str_repeat("-=", 10);
?>
```

The above example will output:

```
-=-=-=-=-=-=-=-=-=-=
```

### See Also

- for
- str_pad() - Pad a string to a certain length with another string
- substr_count() - Count the number of substring occurrences

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.str-repeat.php
