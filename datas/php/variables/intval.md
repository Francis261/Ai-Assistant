# intval

Source: https://devdocs.io/php/function.intval

(PHP 4, PHP 5, PHP 7, PHP 8)

intval — Get the integer value of a variable

### Description

```
intval(mixed $value, int $base = 10): int
```

Returns the int value of value, using the specified base for the conversion (the default is base 10). intval() should not be used on objects, as doing so will emit an E_WARNING level error and return 1.

### Parameters

The scalar value being converted to an integer

The base for the conversion

Note:

If base is 0, the base used is determined by the format of value:

- if string includes a "0x" (or "0X") prefix, the base is taken as 16 (hex); otherwise,
- if string starts with a "0b" (or "0B"), the base is taken as 2 (binary); otherwise,
- if string starts with "0", the base is taken as 8 (octal); otherwise,
- the base is taken as 10 (decimal).

### Return Values

The integer value of value on success, or 0 on failure. Empty arrays return 0, non-empty arrays return 1.

The maximum value depends on the system. 32 bit systems have a maximum signed integer range of -2147483648 to 2147483647. So for example on such a system, intval('1000000000000') will return 2147483647. The maximum signed integer value for 64 bit systems is 9223372036854775807.

Strings will most likely return 0 although this depends on the leftmost characters of the string. The common rules of integer casting apply.

### Changelog

### Examples

Example #1 intval() examples

The following examples are based on a 64 bit system.

```
<?php
echo intval(42), PHP_EOL;                      // 42
echo intval(4.7), PHP_EOL;                     // 4
echo intval('42'), PHP_EOL;                    // 42
echo intval('+42'), PHP_EOL;                   // 42
echo intval('-42'), PHP_EOL;                   // -42
echo intval(042), PHP_EOL;                     // 34
echo intval('042'), PHP_EOL;                   // 42
echo intval(1e10), PHP_EOL;                    // 10000000000
echo intval('1e10'), PHP_EOL;                  // 10000000000
echo intval(0x1A), PHP_EOL;                    // 26
echo intval('0x1A'), PHP_EOL;                  // 0
echo intval('0x1A', 0), PHP_EOL;               // 26
echo intval(42000000), PHP_EOL;                // 42000000
echo intval(420000000000000000000), PHP_EOL;   // -4275113695319687168
echo intval('420000000000000000000'), PHP_EOL; // 9223372036854775807
echo intval(42, 8), PHP_EOL;                   // 42
echo intval('42', 8), PHP_EOL;                 // 34
echo intval(array()), PHP_EOL;                 // 0
echo intval(array('foo', 'bar')), PHP_EOL;     // 1
echo intval(false), PHP_EOL;                   // 0
echo intval(true), PHP_EOL;                    // 1
?>
```

### Notes

Note:

The base parameter has no effect unless the value parameter is a string.

### See Also

- boolval() - Get the boolean value of a variable
- floatval() - Get float value of a variable
- strval() - Get string value of a variable
- settype() - Set the type of a variable
- is_numeric() - Finds whether a variable is a number or a numeric string
- Type juggling
- BCMath Arbitrary Precision Mathematics Functions

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.intval.php
