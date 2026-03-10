# ReflectionMethod::export

Source: https://devdocs.io/php/reflectionmethod.export

(PHP 5, PHP 7)

ReflectionMethod::export — Export a reflection method

This function has been DEPRECATED as of PHP 7.4.0, and REMOVED as of PHP 8.0.0. Relying on this function is highly discouraged.

### Description

```
public static ReflectionMethod::export(string $class, string $name, bool $return = false): string
```

Exports a ReflectionMethod.

### Parameters

The class name.

The name of the method.

Setting to true will return the export, as opposed to emitting it. Setting to false (the default) will do the opposite.

### Return Values

If the return parameter is set to true, then the export is returned as a string, otherwise null is returned.

### Changelog

### See Also

- ReflectionMethod::__construct() - Constructs a ReflectionMethod
- ReflectionMethod::__toString() - Returns the string representation of the Reflection method object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionmethod.export.php
