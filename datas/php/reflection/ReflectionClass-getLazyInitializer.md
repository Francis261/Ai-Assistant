# ReflectionClass::getLazyInitializer

Source: https://devdocs.io/php/reflectionclass.getlazyinitializer

(PHP 8 >= 8.4.0)

ReflectionClass::getLazyInitializer — Gets lazy initializer

### Description

```
public ReflectionClass::getLazyInitializer(object $object): ?callable
```

Gets the lazy initializer or factory attached to object.

### Parameters

### Return Values

Returns the initializer if the object is an uninitialized lazy object, null otherwise.

### See Also

- Lazy objects
- ReflectionClass::newLazyGhost() - Creates a new lazy ghost instance

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionclass.getlazyinitializer.php
