# ReflectionFunction::export

Source: https://devdocs.io/php/reflectionfunction.export

(PHP 5, PHP 7)

ReflectionFunction::export — Exports function

This function has been DEPRECATED as of PHP 7.4.0, and REMOVED as of PHP 8.0.0. Relying on this function is highly discouraged.

### Description

```
public static ReflectionFunction::export(string $name, string $return = ?): string
```

Exports a Reflected function.

### Parameters

The reflection to export.

Setting to true will return the export, as opposed to emitting it. Setting to false (the default) will do the opposite.

### Return Values

If the return parameter is set to true, then the export is returned as a string, otherwise null is returned.

### See Also

- ReflectionFunction::invoke() - Invokes function
- ReflectionFunction::__toString() - Returns the string representation of the ReflectionFunction object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionfunction.export.php
