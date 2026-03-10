# ReflectionProperty::skipLazyInitialization

Source: https://devdocs.io/php/reflectionproperty.skiplazyinitialization

(PHP 8 >= 8.4.0)

ReflectionProperty::skipLazyInitialization — Marks property as non-lazy

### Description

```
public ReflectionProperty::skipLazyInitialization(object $object): void
```

Marks a property as non-lazy such that it can be accessed directly without triggering lazy initialization. The property is initialized to its default value, if any. The property must not be dynamic, static, or virtual, and the object must be an instance of a user defined class or stdClass.

If this was the last lazy property, the object is marked as non-lazy and the initializer or factory function is detached.

### Parameters

### Return Values

No value is returned.

### See Also

- Lazy objects
- ReflectionProperty::setRawValueWithoutLazyInitialization() - Set raw property value without triggering lazy initialization
- ReflectionClass::newLazyGhost() - Creates a new lazy ghost instance

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionproperty.skiplazyinitialization.php
