# ReflectionClass::getConstants

Source: https://devdocs.io/php/reflectionclass.getconstants

(PHP 5, PHP 7, PHP 8)

ReflectionClass::getConstants — Gets constants

### Description

```
public ReflectionClass::getConstants(?int $filter = null): array
```

Gets all defined constants from a class, regardless of their visibility.

### Parameters

The optional filter, for filtering desired constant visibilities. It's configured using the ReflectionClassConstant constants, and defaults to all constant visibilities.

### Return Values

An array of constants, where the keys hold the name and the values the value of the constants.

### Changelog

### See Also

- ReflectionClass::getConstant() - Gets defined constant

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionclass.getconstants.php
