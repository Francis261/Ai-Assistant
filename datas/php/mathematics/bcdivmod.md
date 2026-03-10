# bcdivmod

Source: https://devdocs.io/php/function.bcdivmod

(PHP 8 >= 8.4.0)

bcdivmod — Get the quotient and modulus of an arbitrary precision number

### Description

```
bcdivmod(string $num1, string $num2, ?int $scale = null): array
```

Get the quotient and remainder of dividing num1 by num2.

### Parameters

The dividend, as a string.

The divisor, as a string.

### Return Values

Returns an indexed array where the first element is the quotient as a string and the second element is the remainder as a string.

### Errors/Exceptions

This function throws a ValueError in the following cases:

- num1 or num2 is not a well-formed BCMath numeric string.
- scale is outside the valid range.

This function throws a DivisionByZeroError exception if num2 is 0.

### Examples

Example #1 bcdivmod() example

```
<?php
bcscale(0);

[$quot, $rem] = bcdivmod('5',  '3');
echo $quot; // 1
echo $rem;  // 2

[$quot, $rem] = bcdivmod('5',  '-3');
echo $quot; // -1
echo $rem;  // 2

[$quot, $rem] = bcdivmod('-5',  '3');
echo $quot; // -1
echo $rem;  // -2

[$quot, $rem] = bcdivmod('-5',  '-3');
echo $quot; // 1
echo $rem;  // -2
?>
```

Example #2 bcdivmod() with decimals

```
<?php
[$quot, $rem] = bcdivmod('5.7', '1.3', 1);
echo $quot; // 4
echo $rem;  // 0.5
?>
```

### See Also

- bcdiv() - Divide two arbitrary precision numbers
- bcmod() - Get modulus of an arbitrary precision number
- BcMath\Number::divmod() - Gets the quotient and modulus of an arbitrary precision number

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.bcdivmod.php
