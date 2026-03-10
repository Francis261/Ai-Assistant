# ReflectionClass::isReadOnly

Source: https://devdocs.io/php/reflectionclass.isreadonly

(PHP 8 >= 8.2.0)

ReflectionClass::isReadOnly — Checks if class is readonly

### Description

```
public ReflectionClass::isReadOnly(): bool
```

Checks if a class is readonly.

### Parameters

This function has no parameters.

### Return Values

true if a class is readonly, false otherwise.

### Examples

Example #1 ReflectionClass::isReadOnly() example

```
<?php
class TestClass { }
readonly class TestReadOnlyClass { }

$normalClass = new ReflectionClass('TestClass');
$readonlyClass = new ReflectionClass('TestReadOnlyClass');

var_dump($normalClass->isReadOnly());
var_dump($readonlyClass->isReadOnly());

?>
```

The above example will output:

```
bool(false)
bool(true)
```

### See Also

- ReflectionClass::isAbstract() - Checks if class is abstract
- Readonly classes

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionclass.isreadonly.php
