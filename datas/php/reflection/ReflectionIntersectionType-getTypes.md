# ReflectionIntersectionType::getTypes

Source: https://devdocs.io/php/reflectionintersectiontype.gettypes

(PHP 8 >= 8.1.0)

ReflectionIntersectionType::getTypes — Returns the types included in the intersection type

### Description

```
public ReflectionIntersectionType::getTypes(): array
```

Returns the reflections of types included in the intersection type.

### Parameters

This function has no parameters.

### Return Values

An array of ReflectionType objects.

### Examples

Example #1 ReflectionIntersectionType::getTypes() example

```
<?php

function someFunction(Iterator&Countable $value) {}

$reflectionFunc = new ReflectionFunction('someFunction');
$reflectionParam = $reflectionFunc->getParameters()[0];

var_dump($reflectionParam->getType()->getTypes());
?>
```

The above example will output something similar to:

```
array(2) {
    [0] =>
    class ReflectionNamedType#4(0) {
    }
    [1] =>
    class ReflectionNamedType#5(0) {
    }
}
```

### See Also

- ReflectionType::allowsNull() - Checks if null is allowed
- ReflectionParameter::getType() - Gets a parameter's type

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionintersectiontype.gettypes.php
