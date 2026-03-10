# fprintf

Source: https://devdocs.io/php/function.fprintf

(PHP 5, PHP 7, PHP 8)

fprintf — Write a formatted string to a stream

### Description

```
fprintf(resource $stream, string $format, mixed ...$values): int
```

Write a string produced according to format to the stream resource specified by stream.

### Parameters

A file system pointer resource that is typically created using fopen().

The format string is composed of zero or more directives: ordinary characters (excluding %) that are copied directly to the result and conversion specifications, each of which results in fetching its own parameter.

A conversion specification follows this prototype: %[argnum$][flags][width][.precision]specifier.

##### Argnum

An integer followed by a dollar sign $, to specify which number argument to treat in the conversion.

##### Flags

##### Width

Either an integer that says how many characters (minimum) this conversion should result in, or *. If * is used, then the width is supplied as an additional integer value preceding the one formatted by the specifier.

##### Precision

A period . optionally followed by either an integer or *, whose meaning depends on the specifier:

- For e, E, f and F specifiers: this is the number of digits to be printed after the decimal point (by default, this is 6).
- For g, G, h and H specifiers: this is the maximum number of significant digits to be printed.
- For s specifier: it acts as a cutoff point, setting a maximum character limit to the string.

Note: If the period is specified without an explicit value for precision, 0 is assumed. If * is used, the precision is supplied as an additional integer value preceding the one formatted by the specifier.

General format.

Let P equal the precision if nonzero, 6 if the precision is omitted, or 1 if the precision is zero. Then, if a conversion with style E would have an exponent of X:

If P > X ≥ −4, the conversion is with style f and precision P − (X + 1). Otherwise, the conversion is with style e and precision P − 1.

The c type specifier ignores padding and width.

Attempting to use a combination of the string and width specifiers with character sets that require more than one byte per character may result in unexpected results.

Variables will be co-erced to a suitable type for the specifier:

### Return Values

Returns the length of the string written.

### Errors/Exceptions

As of PHP 8.0.0, a ValueError is thrown if the number of arguments is zero. Prior to PHP 8.0.0, a E_WARNING was emitted instead.

As of PHP 8.0.0, a ValueError is thrown if [width] is less than zero or bigger than PHP_INT_MAX. Prior to PHP 8.0.0, a E_WARNING was emitted instead.

As of PHP 8.0.0, a ValueError is thrown if [precision] is less than zero or bigger than PHP_INT_MAX. Prior to PHP 8.0.0, a E_WARNING was emitted instead.

As of PHP 8.0.0, a ArgumentCountError is thrown when less arguments are given than required. Prior to PHP 8.0.0, false was returned and a E_WARNING emitted instead.

### Changelog

### Examples

Example #1 fprintf(): zero-padded integers

```
<?php
if (!($fp = fopen('date.txt', 'w'))) {
    return;
}

$year = 2005;
$month = 5;
$day = 6;

fprintf($fp, "%04d-%02d-%02d", $year, $month, $day);
// will write the formatted ISO date to date.txt
?>
```

Example #2 fprintf(): formatting currency

```
<?php
if (!($fp = fopen('currency.txt', 'w'))) {
    return;
}

$money1 = 68.75;
$money2 = 54.35;
$money = $money1 + $money2;
// echo $money will output "123.1";
$len = fprintf($fp, '%01.2f', $money);
// will write "123.10" to currency.txt

echo "wrote $len bytes to currency.txt";
// use the return value of fprintf to determine how many bytes we wrote
?>
```

### See Also

- printf() - Output a formatted string
- sprintf() - Return a formatted string
- vprintf() - Output a formatted string
- vsprintf() - Return a formatted string
- vfprintf() - Write a formatted string to a stream
- sscanf() - Parses input from a string according to a format
- fscanf() - Parses input from a file according to a format
- number_format() - Format a number with grouped thousands
- date() - Format a Unix timestamp

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.fprintf.php
