# ReflectionExtension::export

Source: https://devdocs.io/php/reflectionextension.export

(PHP 5, PHP 7)

ReflectionExtension::export — Export

This function has been DEPRECATED as of PHP 7.4.0, and REMOVED as of PHP 8.0.0. Relying on this function is highly discouraged.

### Description

```
public static ReflectionExtension::export(string $name, string $return = false): string
```

Exports a reflected extension. The output format of this function is the same as the CLI argument --re [extension].

### Parameters

The reflection to export.

Setting to true will return the export, as opposed to emitting it. Setting to false (the default) will do the opposite.

### Return Values

If the return parameter is set to true, then the export is returned as a string, otherwise null is returned.

### See Also

- ReflectionExtension::info() - Print extension info
- ReflectionExtension::__toString() - To string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionextension.export.php
