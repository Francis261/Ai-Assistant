# uopz_copy

Source: https://devdocs.io/php/function.uopz-copy

(PECL uopz 1 >= 1.0.4, PECL uopz 2)

uopz_copy — Copy a function

This function has been REMOVED in PECL uopz 5.0.0.

### Description

```
uopz_copy(string $function): Closure
```

```
uopz_copy(string $class, string $function): Closure
```

Copy a function by name

### Parameters

The name of the class containing the function to copy

The name of the function

### Return Values

A Closure for the specified function

### Examples

Example #1 uopz_copy() example

```
<?php
$strtotime = uopz_copy('strtotime');

uopz_function("strtotime", function($arg1, $arg2) use($strtotime) {
    /* can call original strtotime from here */
    var_dump($arg1);
});

var_dump(strtotime('dummy'));
?>
```

The above example will output:

```
string(5) "dummy"
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.uopz-copy.php
