# BcMath\Number::__construct

Source: https://devdocs.io/php/bcmath-number.construct

(PHP 8 >= 8.4.0)

BcMath\Number::__construct — Creates a BcMath\Number object

### Description

Creates a BcMath\Number object from an int or string value.

### Parameters

### Errors/Exceptions

This method throws a ValueError if num is string and not a well-formed BCMath numeric string.

### Examples

Example #1 BcMath\Number::__construct() example

```
<?php
$num1 = new BcMath\Number(100);
$num2 = new BcMath\Number('-200');
$num3 = new BcMath\Number('300.00');

var_dump($num1, $num2, $num3);
?>
```

The above example will output:

```
object(BcMath\Number)#1 (2) {
  ["value"]=>
  string(3) "100"
  ["scale"]=>
  int(0)
}
object(BcMath\Number)#2 (2) {
  ["value"]=>
  string(4) "-200"
  ["scale"]=>
  int(0)
}
object(BcMath\Number)#3 (2) {
  ["value"]=>
  string(6) "300.00"
  ["scale"]=>
  int(2)
}
```

### See Also

- BcMath\Number::__serialize() - Serializes a BcMath\Number object
- BcMath\Number::__unserialize() - Deserializes a data parameter into a BcMath\Number object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/bcmath-number.construct.php
