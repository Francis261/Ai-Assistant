# array_product

Source: https://devdocs.io/php/function.array-product

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

array_product — Calculate the product of values in an array

### Description

```
array_product(array $array): int|float
```

array_product() returns the product of values in an array.

### Parameters

The array.

### Return Values

Returns the product as an integer or float.

### Changelog

### Examples

Example #1 array_product() examples

```
<?php

$a = array(2, 4, 6, 8);
echo "product(a) = " . array_product($a) . "\n";
echo "product(array()) = " . array_product(array()) . "\n";

?>
```

The above example will output:

```
product(a) = 384
product(array()) = 1
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.array-product.php
