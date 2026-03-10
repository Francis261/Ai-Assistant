# BcMath\Number::floor

Source: https://devdocs.io/php/bcmath-number.floor

(PHP 8 >= 8.4.0)

BcMath\Number::floor — Rounds down an arbitrary precision number

### Description

```
public BcMath\Number::floor(): BcMath\Number
```

Returns the next highest integer value by rounding down $this if necessary.

### Parameters

This function has no parameters.

### Return Values

Returns the result as a new BcMath\Number object. The BcMath\Number::scale of the result is always 0.

### Examples

Example #1 BcMath\Number::floor() example

```
<?php
$num1 = new BcMath\Number('4.3')->floor();
$num2 = new BcMath\Number('9.999')->floor();
$num3 = new BcMath\Number('-3.14')->floor();

var_dump($num1, $num2, $num3);
?>
```

The above example will output:

```
object(BcMath\Number)#2 (2) {
  ["value"]=>
  string(1) "4"
  ["scale"]=>
  int(0)
}
object(BcMath\Number)#3 (2) {
  ["value"]=>
  string(1) "9"
  ["scale"]=>
  int(0)
}
object(BcMath\Number)#4 (2) {
  ["value"]=>
  string(2) "-4"
  ["scale"]=>
  int(0)
}
```

### See Also

- bcfloor() - Round down arbitrary precision number
- BcMath\Number::ceil() - Rounds up an arbitrary precision number
- BcMath\Number::round() - Rounds an arbitrary precision number

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/bcmath-number.floor.php
