# ReflectionClass::isAbstract

Source: https://devdocs.io/php/reflectionclass.isabstract

(PHP 5, PHP 7, PHP 8)

ReflectionClass::isAbstract — Checks if class is abstract

### Description

```
public ReflectionClass::isAbstract(): bool
```

Checks if the class is abstract.

### Parameters

This function has no parameters.

### Return Values

Returns true if the class is abstract or false otherwise.

### Examples

Example #1 ReflectionClass::isAbstract() example

```
<?php
class          TestClass { }
abstract class TestAbstractClass { }

$testClass     = new ReflectionClass('TestClass');
$abstractClass = new ReflectionClass('TestAbstractClass');

var_dump($testClass->isAbstract());
var_dump($abstractClass->isAbstract());
?>
```

The above example will output:

```
bool(false)
bool(true)
```

### See Also

- ReflectionClass::isInterface() - Checks if the class is an interface
- Class Abstraction

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionclass.isabstract.php
