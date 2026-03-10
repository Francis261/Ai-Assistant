# uopz_function

Source: https://devdocs.io/php/function.uopz-function

(PECL uopz 1, PECL uopz 2)

uopz_function — Creates a function at runtime

This function has been REMOVED in PECL uopz 5.0.0.

### Description

```
uopz_function(string $function, Closure $handler, int $modifiers = ?): void
```

```
uopz_function(
 string $class,
 string $function,
 Closure $handler,
 int $modifiers = ?
): void
```

Creates a function at runtime

### Parameters

The name of the class to receive the new function

The name of the function

The Closure for the function

The modifiers for the function, by default copied or ZEND_ACC_PUBLIC

### Return Values

### Examples

Example #1 uopz_function() example

```
<?php
uopz_function("my_strlen", function($arg) {
    return strlen($arg);
});
echo my_strlen("Hello World");
?>
```

The above example will output:

```
11
```

Example #2 uopz_function() class example

```
<?php
class My {}

uopz_function(My::class, "strlen", function($arg) {
    return strlen($arg);
}, ZEND_ACC_STATIC);

echo My::strlen("Hello World");
?>
```

The above example will output:

```
11
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.uopz-function.php
