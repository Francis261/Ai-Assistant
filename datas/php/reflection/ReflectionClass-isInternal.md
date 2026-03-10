# ReflectionClass::isInternal

Source: https://devdocs.io/php/reflectionclass.isinternal

(PHP 5, PHP 7, PHP 8)

ReflectionClass::isInternal — Checks if class is defined internally by an extension, or the core

### Description

```
public ReflectionClass::isInternal(): bool
```

Checks if the class is defined internally by an extension, or the core, as opposed to user-defined.

### Parameters

This function has no parameters.

### Return Values

Returns true if the class is defined internally by an extension or core, or false otherwise.

### Examples

Example #1 Basic usage of ReflectionClass::isInternal()

```
<?php
$internalclass = new ReflectionClass('ReflectionClass');

class Apple {}
$userclass = new ReflectionClass('Apple');

var_dump($internalclass->isInternal());
var_dump($userclass->isInternal());
?>
```

The above example will output:

```
bool(true)
bool(false)
```

### See Also

- ReflectionClass::isUserDefined() - Checks if user defined

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionclass.isinternal.php
