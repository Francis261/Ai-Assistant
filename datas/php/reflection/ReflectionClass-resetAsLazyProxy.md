# ReflectionClass::resetAsLazyProxy

Source: https://devdocs.io/php/reflectionclass.resetaslazyproxy

(PHP 8 >= 8.4.0)

ReflectionClass::resetAsLazyProxy — Resets an object and marks it as lazy

### Description

```
public ReflectionClass::resetAsLazyProxy(object $object, callable $factory, int $options = 0): void
```

The behavior of this method is the same as ReflectionClass::resetAsLazyGhost() except that it uses the proxy strategy.

The object itself becomes the proxy. Similarly to ReflectionClass::resetAsLazyGhost(), the object is not replaced by an other one, and its identity does not change, even after initialization. The proxy and the real instance are distinct objects, with distinct identities.

### Parameters

options can be a combination of the following flags:

### Return Values

No value is returned.

### Errors/Exceptions

A ReflectionException if the object is lazy and non-initialized.

An Error if the object is being initialized, or if the object properties are being iterated with foreach.

### See Also

- ReflectionClass::newLazyProxy() - Creates a new lazy proxy instance
- ReflectionClass::resetAsLazyGhost() - Resets an object and marks it as lazy

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionclass.resetaslazyproxy.php
