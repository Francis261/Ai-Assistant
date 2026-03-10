# ReflectionParameter::isCallable

Source: https://devdocs.io/php/reflectionparameter.iscallable

(PHP 5 >= 5.4.0, PHP 7, PHP 8)

ReflectionParameter::isCallable — Returns whether parameter MUST be callable

This function has been DEPRECATED as of PHP 8.0.0. Relying on this function is highly discouraged.

See the example below for an alternative way to derive this information.

### Description

```
#[\Deprecated] 
 public ReflectionParameter::isCallable(): bool
```

This function is currently not documented; only its argument list is available.

### Parameters

This function has no parameters.

### Return Values

Returns true if the parameter is callable, false if it is not or null on failure.

### Changelog

### Examples

Example #1 PHP 8.0.0 equivalent

As of PHP 8.0.0, the following code will report if a type supports callables, including as part of a union.

```
<?php
function declaresCallable(ReflectionParameter $reflectionParameter): bool
{
    $reflectionType = $reflectionParameter->getType();

    if (!$reflectionType) return false;

    $types = $reflectionType instanceof ReflectionUnionType
        ? $reflectionType->getTypes()
        : [$reflectionType];

   return in_array('callable', array_map(fn(ReflectionNamedType $t) => $t->getName(), $types));
}
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionparameter.iscallable.php
