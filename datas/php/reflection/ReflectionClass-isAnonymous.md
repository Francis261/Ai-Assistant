# ReflectionClass::isAnonymous

Source: https://devdocs.io/php/reflectionclass.isanonymous

(PHP 7, PHP 8)

ReflectionClass::isAnonymous — Checks if class is anonymous

### Description

```
public ReflectionClass::isAnonymous(): bool
```

Checks if a class is an anonymous class.

### Parameters

This function has no parameters.

### Return Values

Returns true if the class is anonymous or false otherwise.

### Examples

Example #1 ReflectionClass::isAnonymous() example

```
<?php
class TestClass {}
$anonClass = new class {};

$normalClass = new ReflectionClass('TestClass');
$anonClass  = new ReflectionClass($anonClass);

var_dump($normalClass->isAnonymous());
var_dump($anonClass->isAnonymous());

?>
```

The above example will output:

```
bool(false)
bool(true)
```

### See Also

- ReflectionClass::isFinal() - Checks if class is final

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionclass.isanonymous.php
