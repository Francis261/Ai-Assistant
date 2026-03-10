# runkit7_zval_inspect

Source: https://devdocs.io/php/function.runkit7-zval-inspect

(PECL runkit7 >= Unknown)

runkit7_zval_inspect — Returns information about the passed in value with data types, reference counts, etc

### Description

```
runkit7_zval_inspect(string $value): array
```

### Parameters

The value to return the representation of

### Return Values

The array returned by this function contains the following elements:

- address
- refcount (optional)
- is_ref (optional)
- type

### Examples

Example #1 runkit7_zval_inspect() example

```
<?php

$var = new DateTime();
var_dump(runkit7_zval_inspect($var));

$var = 1;
var_dump(runkit7_zval_inspect($var));
?>
```

The above example will output:

```
array(4) {
  ["address"]=>
  string(14) "0x7f45ab21b1e0"
  ["refcount"]=>
  int(2)
  ["is_ref"]=>
  bool(false)
  ["type"]=>
  int(8)
}

array(2) {
  ["address"]=>
  string(14) "0x7f45ab21b1e0"
  ["type"]=>
  int(4)
}
```

### See Also

- References Explained
- » References Explained (by Derick Rethans)

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.runkit7-zval-inspect.php
