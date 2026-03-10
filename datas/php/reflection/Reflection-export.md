# Reflection::export

Source: https://devdocs.io/php/reflection.export

(PHP 5, PHP 7)

Reflection::export — Exports

This function has been DEPRECATED as of PHP 7.4.0, and REMOVED as of PHP 8.0.0. Relying on this function is highly discouraged.

### Description

```
public static Reflection::export(Reflector $reflector, bool $return = false): string
```

Exports a reflection.

This function is currently not documented; only its argument list is available.

### Parameters

The reflection to export.

Setting to true will return the export, as opposed to emitting it. Setting to false (the default) will do the opposite.

### Return Values

If the return parameter is set to true, then the export is returned as a string, otherwise null is returned.

### See Also

- Reflection::getModifierNames() - Gets modifier names

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflection.export.php
