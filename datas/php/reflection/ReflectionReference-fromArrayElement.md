# ReflectionReference::fromArrayElement

Source: https://devdocs.io/php/reflectionreference.fromarrayelement

(PHP 7 >= 7.4.0, PHP 8)

ReflectionReference::fromArrayElement — Create a ReflectionReference from an array element

### Description

```
public static ReflectionReference::fromArrayElement(array $array, int|string $key): ?ReflectionReference
```

Creates a ReflectionReference from an array element.

### Parameters

The array which contains the potential reference.

The key; either an int or a string.

### Return Values

Returns a ReflectionReference instance if $array[$key] is a reference, or null otherwise.

### Errors/Exceptions

If array is not an array, or key is not an int or string, a TypeError is thrown. If $array[$key] does not exist, a ReflectionException is thrown.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionreference.fromarrayelement.php
