# method_exists

Source: https://devdocs.io/php/function.method-exists

(PHP 4, PHP 5, PHP 7, PHP 8)

method_exists — Checks if the class method exists

### Description

```
method_exists(object|string $object_or_class, string $method): bool
```

Checks if the class method exists in the given object_or_class.

### Parameters

An object instance or a class name

The method name

### Return Values

Returns true if the method given by method has been defined for the given object_or_class, false otherwise.

### Changelog

### Examples

Example #1 method_exists() example

```
<?php
$directory = new Directory('.');
var_dump(method_exists($directory,'read'));
?>
```

The above example will output:

```
bool(true)
```

Example #2 Static method_exists() example

```
<?php
var_dump(method_exists('Directory','read'));
?>
```

The above example will output:

```
bool(true)
```

### Notes

Note:

Using this function will use any registered autoloaders if the class is not already known.

Note: The method_exists() function cannot detect methods that are magically accessible using the __call magic method.

### See Also

- function_exists() - Return true if the given function has been defined
- is_callable() - Verify that a value can be called as a function from the current scope
- class_exists() - Checks if the class has been defined

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.method-exists.php
