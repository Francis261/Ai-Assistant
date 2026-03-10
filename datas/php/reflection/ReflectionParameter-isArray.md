# ReflectionParameter::isArray

Source: https://devdocs.io/php/reflectionparameter.isarray

(PHP 5 >= 5.1.2, PHP 7, PHP 8)

ReflectionParameter::isArray — Checks if parameter expects an array

This function has been DEPRECATED as of PHP 8.0.0. Relying on this function is highly discouraged.

See the example below for an alternative way to derive this information.

### Description

```
#[\Deprecated] 
 public ReflectionParameter::isArray(): bool
```

Checks if the parameter expects an array.

### Parameters

This function has no parameters.

### Return Values

true if an array is expected, false otherwise.

### Changelog

### Examples

Example #1 PHP 8.0.0 equivalent

As of PHP 8.0.0, the following code will report if a type declares arrays, including as part of a union.

```
<?php
function declaresArray(ReflectionParameter $reflectionParameter): bool
{
    $reflectionType = $reflectionParameter->getType();

    if (!$reflectionType) return false;

    $types = $reflectionType instanceof ReflectionUnionType
        ? $reflectionType->getTypes()
        : [$reflectionType];

   return in_array('array', array_map(fn(ReflectionNamedType $t) => $t->getName(), $types));
}
?>
```

### See Also

- ReflectionParameter::isOptional() - Checks if optional

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionparameter.isarray.php
