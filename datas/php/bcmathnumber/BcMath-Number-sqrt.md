# BcMath\Number::sqrt

Source: https://devdocs.io/php/bcmath-number.sqrt

(PHP 8 >= 8.4.0)

BcMath\Number::sqrt — Gets the square root of an arbitrary precision number

### Description

```
public BcMath\Number::sqrt(?int $scale = null): BcMath\Number
```

Return the square root of $this.

### Parameters

### Return Values

Returns the square root as a new BcMath\Number object.

When the BcMath\Number::scale of the result object is automatically set, the BcMath\Number::scale of $this is used. However, in cases such as indivisible division, the BcMath\Number::scale of the result is expanded. Expansion is done only as needed, up to a maximum of +10. This behavior is the same as BcMath\Number::div(), so please see that for details.

That is, if the BcMath\Number::scale of $this is 5, the BcMath\Number::scale of the result is between 5 and 15.

### Errors/Exceptions

This method throws a ValueError in the following cases:

- $this is a negative value
- scale is outside the valid range
- BcMath\Number::scale of the result object is outside the valid range

### Examples

Example #1 BcMath\Number::sqrt() example

```
<?php
var_dump(
    new BcMath\Number('2')->sqrt(),
    new BcMath\Number('2')->sqrt(3),
    new BcMath\Number('4')->sqrt(),
    new BcMath\Number('4')->sqrt(3),
);
?>
```

The above example will output:

```
object(BcMath\Number)#2 (2) {
  ["value"]=>
  string(12) "1.4142135623"
  ["scale"]=>
  int(10)
}
object(BcMath\Number)#3 (2) {
  ["value"]=>
  string(5) "1.414"
  ["scale"]=>
  int(3)
}
object(BcMath\Number)#4 (2) {
  ["value"]=>
  string(1) "2"
  ["scale"]=>
  int(0)
}
object(BcMath\Number)#5 (2) {
  ["value"]=>
  string(5) "2.000"
  ["scale"]=>
  int(3)
}
```

### See Also

- bcsqrt() - Get the square root of an arbitrary precision number
- BcMath\Number::div() - Divides by an arbitrary precision number
- BcMath\Number::pow() - Raises an arbitrary precision number

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/bcmath-number.sqrt.php
