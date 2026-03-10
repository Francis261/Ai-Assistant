# number_format

Source: https://devdocs.io/php/function.number-format

(PHP 4, PHP 5, PHP 7, PHP 8)

number_format — Format a number with grouped thousands

### Description

```
number_format(
 float $num,
 int $decimals = 0,
 ?string $decimal_separator = ".",
 ?string $thousands_separator = ","
): string
```

Formats a number with grouped thousands and optionally decimal digits using the rounding half up rule.

### Parameters

The number being formatted.

Sets the number of decimal digits. If 0, the decimal_separator is omitted from the return value. As of PHP 8.3.0, when the value is negative, num is rounded to decimals significant digits before the decimal point. Prior to PHP 8.3.0, negative values were ignored and handled the same as 0.

Sets the separator for the decimal point.

Sets the thousands separator.

### Return Values

A formatted version of num.

### Changelog

### Examples

Example #1 number_format() Example

For instance, French notation usually use two decimals, comma (',') as decimal separator, and space (' ') as thousand separator. The following example demonstrates various ways to format a number:

```
<?php

$number = 1234.56;

// english notation (default)
echo number_format($number), PHP_EOL;
// 1,235

// French notation
echo number_format($number, 2, ',', ' '), PHP_EOL;
// 1 234,56

$number = 1234.5678;

// english notation without thousands separator
echo number_format($number, 2, '.', ''), PHP_EOL;
// 1234.57

?>
```

Example #2 A negative value for decimals

As of PHP 8.3.0, a negative value for decimals is used to round the number of significant digits before the decimal point.

```
<?php
$number = "1234.5678";
var_dump(number_format($number, -1));
var_dump(number_format($number, -2));
var_dump(number_format($number, -3));
?>
```

The above example will output:

```
string(5) "1,230"
string(5) "1,200"
string(5) "1,000"
```

### See Also

- money_format() - Formats a number as a currency string
- sprintf() - Return a formatted string
- printf() - Output a formatted string
- sscanf() - Parses input from a string according to a format

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.number-format.php
