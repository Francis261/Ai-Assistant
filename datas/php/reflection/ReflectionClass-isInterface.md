# ReflectionClass::isInterface

Source: https://devdocs.io/php/reflectionclass.isinterface

(PHP 5, PHP 7, PHP 8)

ReflectionClass::isInterface — Checks if the class is an interface

### Description

```
public ReflectionClass::isInterface(): bool
```

Checks whether the class is an interface.

### Parameters

This function has no parameters.

### Return Values

Returns true if the class is an interface or false otherwise.

### Examples

Example #1 Basic usage of ReflectionClass::isInterface()

```
<?php
interface SomeInterface {
    public function interfaceMethod();
}

$class = new ReflectionClass('SomeInterface');
var_dump($class->isInterface());
?>
```

The above example will output:

```
bool(true)
```

### See Also

- ReflectionClass::isInstance() - Checks class for instance

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionclass.isinterface.php
