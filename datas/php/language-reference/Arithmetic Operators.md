# Arithmetic Operators

Source: https://devdocs.io/php/language.operators.arithmetic

## Arithmetic Operators

Remember basic arithmetic from school? These work just like those.

The division operator / returns a float value unless the two operands are int (or numeric strings which are type juggled to int) and the numerator is a multiple of the divisor, in which case an integer value will be returned. For integer division, see intdiv().

Operands of modulo are converted to int before processing. For floating-point modulo, see fmod().

The result of the modulo operator % has the same sign as the dividend — that is, the result of $a % $b will have the same sign as $a. For example:

Example #1 The Modulo Operator

```
<?php
var_dump(5 % 3);
var_dump(5 % -3);
var_dump(-5 % 3);
var_dump(-5 % -3);
?>
```

The above example will output:

```
int(2)
int(2)
int(-2)
int(-2)
```

### See Also

- Math functions

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/language.operators.arithmetic.php
