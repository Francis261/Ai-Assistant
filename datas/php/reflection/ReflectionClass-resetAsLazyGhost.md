# ReflectionClass::resetAsLazyGhost

Source: https://devdocs.io/php/reflectionclass.resetaslazyghost

(PHP 8 >= 8.4.0)

ReflectionClass::resetAsLazyGhost — Resets an object and marks it as lazy

### Description

```
public ReflectionClass::resetAsLazyGhost(object $object, callable $initializer, int $options = 0): void
```

Resets an existing object and marks it as lazy.

The object's destructor is called (if one exists) unless the ReflectionClass::SKIP_DESTRUCTOR flag is specified. In the special case where the object is an initialized proxy, the real instance is detached from the proxy. If the real instance is no longer referenced elsewhere, its destructor is called regardless of the SKIP_DESTRUCTOR flag.

Dynamic properties are removed, and the value of properties declared on the class is discarded as though unset() was called, and marked as lazy. This implies that if the object is an instance of a subclass with additional properties, these properties are not modified and not made lazy. Readonly properties are also not modified and not made lazy if they are final or the class itself is final.

If no properties were marked lazy, the object is not marked as lazy. See also Lazy Objects Lifecycle.

Otherwise, after calling this method, the behavior of the object is the same as an object created by ReflectionClass::newLazyGhost() (except for subclass and readonly properties, as described above).

The object is not replaced by another one, and its identity remains unchanged. Functionality such as spl_object_id(), spl_object_hash(), SplObjectStorage, WeakMap, WeakReference, or the identity operator (===) are unaffected.

### Parameters

options can be a combination of the following flags:

### Return Values

No value is returned.

### Errors/Exceptions

A ReflectionException if the object is lazy and non-initialized.

An Error if the object is being initialized, or if the object properties are being iterated with foreach.

### See Also

- ReflectionClass::newLazyGhost() - Creates a new lazy ghost instance
- ReflectionClass::resetAsLazyProxy() - Resets an object and marks it as lazy

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionclass.resetaslazyghost.php
