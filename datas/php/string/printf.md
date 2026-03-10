# printf

Source: https://devdocs.io/php/function.printf

(PHP 4, PHP 5, PHP 7, PHP 8)

printf — Output a formatted string

### Description

```
printf(string $format, mixed ...$values): int
```

Produces output according to format.

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

Returns the length of the outputted string.

### Errors/Exceptions

As of PHP 8.0.0, a ValueError is thrown if the number of arguments is zero. Prior to PHP 8.0.0, a E_WARNING was emitted instead.

As of PHP 8.0.0, a ValueError is thrown if [width] is less than zero or bigger than PHP_INT_MAX. Prior to PHP 8.0.0, a E_WARNING was emitted instead.

As of PHP 8.0.0, a ValueError is thrown if [precision] is less than zero or bigger than PHP_INT_MAX. Prior to PHP 8.0.0, a E_WARNING was emitted instead.

As of PHP 8.0.0, a ArgumentCountError is thrown when less arguments are given than required. Prior to PHP 8.0.0, false was returned and a E_WARNING emitted instead.

### Changelog

### Examples

Example #1 printf(): various examples

```
<?php
$n =  43951789;
$u = -43951789;
$c = 65; // ASCII 65 is 'A'

// notice the double %%, this prints a literal '%' character
printf("%%b = '%b'\n", $n); // binary representation
printf("%%c = '%c'\n", $c); // print the ascii character, same as chr() function
printf("%%d = '%d'\n", $n); // standard integer representation
printf("%%e = '%e'\n", $n); // scientific notation
printf("%%u = '%u'\n", $n); // unsigned integer representation of a positive integer
printf("%%u = '%u'\n", $u); // unsigned integer representation of a negative integer
printf("%%f = '%f'\n", $n); // floating point representation
printf("%%o = '%o'\n", $n); // octal representation
printf("%%s = '%s'\n", $n); // string representation
printf("%%x = '%x'\n", $n); // hexadecimal representation (lower-case)
printf("%%X = '%X'\n", $n); // hexadecimal representation (upper-case)

printf("%%+d = '%+d'\n", $n); // sign specifier on a positive integer
printf("%%+d = '%+d'\n", $u); // sign specifier on a negative integer
?>
```

The above example will output:

```
%b = '10100111101010011010101101'
%c = 'A'
%d = '43951789'
%e = '4.39518e+7'
%u = '43951789'
%u = '4251015507'
%f = '43951789.000000'
%o = '247523255'
%s = '43951789'
%x = '29ea6ad'
%X = '29EA6AD'
%+d = '+43951789'
%+d = '-43951789'
```

Example #2 printf(): string specifiers

```
<?php
$s = 'monkey';
$t = 'many monkeys';

printf("[%s]\n",        $s); // standard string output
printf("[%10s]\n",      $s); // right-justification with spaces
printf("[%-10s]\n",     $s); // left-justification with spaces
printf("[%010s]\n",     $s); // zero-padding works on strings too
printf("[%'#10s]\n",    $s); // use the custom padding character '#'
printf("[%'#*s]\n", 10, $s); // Provide the padding width as an additional argument
printf("[%10.9s]\n",    $t); // right-justification but with a cutoff of 8 characters
printf("[%-10.9s]\n",   $t); // left-justification but with a cutoff of 8 characters
?>
```

The above example will output:

```
[monkey]
[    monkey]
[monkey    ]
[0000monkey]
[####monkey]
[####monkey]
[ many monk]
[many monk ]
```

### See Also

- print - Output a string
- sprintf() - Return a formatted string
- fprintf() - Write a formatted string to a stream
- vprintf() - Output a formatted string
- vsprintf() - Return a formatted string
- vfprintf() - Write a formatted string to a stream
- sscanf() - Parses input from a string according to a format
- fscanf() - Parses input from a file according to a format
- number_format() - Format a number with grouped thousands
- date() - Format a Unix timestamp
- flush() - Flush system output buffer

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.printf.php
