# uopz_add_function

Source: https://devdocs.io/php/function.uopz-add-function

(PECL uopz 5, PECL uopz 6, PECL uopz 7)

uopz_add_function — Adds non-existent function or method

### Description

```
uopz_add_function(string $function, Closure $handler, int &$flags = ZEND_ACC_PUBLIC): bool
```

```
uopz_add_function(
 string $class,
 string $function,
 Closure $handler,
 int &$flags = ZEND_ACC_PUBLIC,
 int &$all = true
): bool
```

Adds a non-existent function or method.

### Parameters

The name of the class.

The name of the function or method.

The Closure that defines the new function or method.

Flags to set for the new function or method.

Whether all classes that descend from class will also be affected.

### Return Values

Returns true on success or false on failure.

### Errors/Exceptions

uopz_add_function() throws a RuntimeException if the function or method to add already exists.

### Examples

Example #1 Basic uopz_add_function() Usage

```
<?php
uopz_add_function('foo', function () {echo 'bar';});
foo();
?>
```

The above example will output:

```
bar
```

### See Also

- uopz_del_function() - Deletes previously added function or method
- uopz_set_return() - Provide a return value for an existing function

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.uopz-add-function.php
