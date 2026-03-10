# BcMath\Number::ceil

Source: https://devdocs.io/php/bcmath-number.ceil

(PHP 8 >= 8.4.0)

BcMath\Number::ceil — Rounds up an arbitrary precision number

### Description

```
public BcMath\Number::ceil(): BcMath\Number
```

Returns the next highest integer value by rounding up $this if necessary.

### Parameters

This function has no parameters.

### Return Values

Returns the result as a new BcMath\Number object. The BcMath\Number::scale of the result is always 0.

### Examples

Example #1 BcMath\Number::ceil() example

```
<?php
$num1 = new BcMath\Number('4.3')->ceil();
$num2 = new BcMath\Number('9.999')->ceil();
$num3 = new BcMath\Number('-3.14')->ceil();

var_dump($num1, $num2, $num3);
?>
```

The above example will output:

```
object(BcMath\Number)#2 (2) {
  ["value"]=>
  string(1) "5"
  ["scale"]=>
  int(0)
}
object(BcMath\Number)#3 (2) {
  ["value"]=>
  string(2) "10"
  ["scale"]=>
  int(0)
}
object(BcMath\Number)#4 (2) {
  ["value"]=>
  string(2) "-3"
  ["scale"]=>
  int(0)
}
```

### See Also

- bcceil() - Round up arbitrary precision number
- BcMath\Number::floor() - Rounds down an arbitrary precision number
- BcMath\Number::round() - Rounds an arbitrary precision number

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/bcmath-number.ceil.php
