# var_dump

Source: https://devdocs.io/php/function.var-dump

(PHP 4, PHP 5, PHP 7, PHP 8)

var_dump — Dumps information about a variable

### Description

```
var_dump(mixed $value, mixed ...$values): void
```

This function displays structured information about one or more expressions that includes its type and value. Arrays and objects are explored recursively with values indented to show structure.

All public, private and protected properties of objects will be returned in the output unless the object implements a __debugInfo() method.

As with anything that outputs its result directly to the browser, the output-control functions can be used to capture the output of this function, and save it in a string (for example).

### Parameters

The expression to dump.

Further expressions to dump.

### Return Values

No value is returned.

### Examples

Example #1 var_dump() example

```
<?php
$a = array(1, 2, array("a", "b", "c"));
var_dump($a);
?>
```

The above example will output:

```
array(3) {
  [0]=>
  int(1)
  [1]=>
  int(2)
  [2]=>
  array(3) {
    [0]=>
    string(1) "a"
    [1]=>
    string(1) "b"
    [2]=>
    string(1) "c"
  }
}
```

```
<?php

$b = 3.1;
$c = true;
var_dump($b, $c);

?>
```

The above example will output:

```
float(3.1)
bool(true)
```

### See Also

- print_r() - Prints human-readable information about a variable
- debug_zval_dump() - Dumps a string representation of an internal zval structure to output
- var_export() - Outputs or returns a parsable string representation of a variable
- __debugInfo()

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.var-dump.php
