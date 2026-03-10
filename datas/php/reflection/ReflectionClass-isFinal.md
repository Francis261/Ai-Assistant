# ReflectionClass::isFinal

Source: https://devdocs.io/php/reflectionclass.isfinal

(PHP 5, PHP 7, PHP 8)

ReflectionClass::isFinal — Checks if class is final

### Description

```
public ReflectionClass::isFinal(): bool
```

Checks if a class is final.

### Parameters

This function has no parameters.

### Return Values

Returns true if the class is final or false otherwise.

### Examples

Example #1 ReflectionClass::isFinal() example

```
<?php
class       TestClass { }
final class TestFinalClass { }

$normalClass = new ReflectionClass('TestClass');
$finalClass  = new ReflectionClass('TestFinalClass');

var_dump($normalClass->isFinal());
var_dump($finalClass->isFinal());

?>
```

The above example will output:

```
bool(false)
bool(true)
```

### See Also

- ReflectionClass::isAbstract() - Checks if class is abstract
- Final Keyword

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionclass.isfinal.php
