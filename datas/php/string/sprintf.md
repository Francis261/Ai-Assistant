# sprintf

Source: https://devdocs.io/php/function.sprintf

(PHP 4, PHP 5, PHP 7, PHP 8)

sprintf — Return a formatted string

### Description

```
sprintf(string $format, mixed ...$values): string
```

Returns a string produced according to the formatting string format.

### Parameters

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

Returns a string produced according to the formatting string format.

### Errors/Exceptions

As of PHP 8.0.0, a ValueError is thrown if the number of arguments is zero. Prior to PHP 8.0.0, a E_WARNING was emitted instead.

As of PHP 8.0.0, a ValueError is thrown if [width] is less than zero or bigger than PHP_INT_MAX. Prior to PHP 8.0.0, a E_WARNING was emitted instead.

As of PHP 8.0.0, a ValueError is thrown if [precision] is less than zero or bigger than PHP_INT_MAX. Prior to PHP 8.0.0, a E_WARNING was emitted instead.

As of PHP 8.0.0, a ArgumentCountError is thrown when less arguments are given than required. Prior to PHP 8.0.0, false was returned and a E_WARNING emitted instead.

### Changelog

### Examples

Example #1 Argument swapping

The format string supports argument numbering/swapping.

```
<?php
$num = 5;
$location = 'tree';

$format = 'There are %d monkeys in the %s';
echo sprintf($format, $num, $location);
?>
```

The above example will output:

```
There are 5 monkeys in the tree
```

However imagine we are creating a format string in a separate file, commonly because we would like to internationalize it and we rewrite it as:

Example #2 Wrong Argument Order

The format string supports argument numbering/swapping.

```
<?php
$num = 5;
$location = 'tree';

$format = 'The %s contains %d monkeys';
echo sprintf($format, $num, $location);
?>
```

We now have a problem. The order of the placeholders in the format string does not match the order of the arguments in the code. We would like to leave the code as is and simply indicate in the format string which arguments the placeholders refer to. We would write the format string like this instead:

Example #3 Use Order Placeholder

```
<?php
$num = 5;
$location = 'tree';

$format = 'The %2$s contains %1$d monkeys';
echo sprintf($format, $num, $location);
?>
```

An added benefit is that placeholders can be repeated without adding more arguments in the code.

Example #4 Repeated Placeholder

```
<?php
$num = 5;
$location = 'tree';

$format = 'The %2$s contains %1$d monkeys.
           That\'s a nice %2$s full of %1$d monkeys.';
echo sprintf($format, $num, $location);
?>
```

When using argument swapping, the n$ position specifier must come immediately after the percent sign (%), before any other specifiers, as shown below.

Example #5 Specifying padding character

```
<?php
echo sprintf("%'.9d\n", 123);
echo sprintf("%'.09d\n", 123);
?>
```

The above example will output:

```
......123
000000123
```

Example #6 Position specifier with other specifiers

```
<?php
$num = 5;
$location = 'tree';

$format = 'The %2$s contains %1$04d monkeys';
echo sprintf($format, $num, $location);
?>
```

The above example will output:

```
The tree contains 0005 monkeys
```

Example #7 sprintf(): zero-padded integers

```
<?php
$year = 2005;
$month = 5;
$day = 6;

$isodate = sprintf("%04d-%02d-%02d", $year, $month, $day);
echo $isodate, PHP_EOL;
?>
```

Example #8 sprintf(): formatting currency

```
<?php
$money1 = 68.75;
$money2 = 54.35;
$money = $money1 + $money2;
echo $money, PHP_EOL;

$formatted = sprintf("%01.2f", $money);
echo $formatted, PHP_EOL;
?>
```

The above example will output:

```
123.1
123.10
```

Example #9 sprintf(): scientific notation

```
<?php
$number = 362525200;

echo sprintf("%.3e", $number), PHP_EOL;
?>
```

The above example will output:

```
3.625e+8
```

### See Also

- printf() - Output a formatted string
- fprintf() - Write a formatted string to a stream
- vprintf() - Output a formatted string
- vsprintf() - Return a formatted string
- vfprintf() - Write a formatted string to a stream
- sscanf() - Parses input from a string according to a format
- fscanf() - Parses input from a file according to a format
- number_format() - Format a number with grouped thousands
- date() - Format a Unix timestamp

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sprintf.php
