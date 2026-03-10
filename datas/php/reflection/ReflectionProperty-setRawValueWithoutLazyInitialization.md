# ReflectionProperty::setRawValueWithoutLazyInitialization

Source: https://devdocs.io/php/reflectionproperty.setrawvaluewithoutlazyinitialization

(PHP 8 >= 8.4.0)

ReflectionProperty::setRawValueWithoutLazyInitialization — Set raw property value without triggering lazy initialization

### Description

```
public ReflectionProperty::setRawValueWithoutLazyInitialization(object $object, mixed $value): void
```

Sets (changes) the property's value without triggering lazy initialization and without calling hook functions. The property is marked as non-lazy and can be accessed afterwards without triggering lazy initialization. The property must not be dynamic, static, or virtual, and the object must be an instance of a user defined class or stdClass.

If this was the last lazy property, the object is marked as non-lazy and the initializer or factory function is detached.

### Parameters

### Return Values

No value is returned.

### See Also

- Lazy objects
- ReflectionProperty::skipLazyInitialization() - Marks property as non-lazy
- ReflectionClass::newLazyGhost() - Creates a new lazy ghost instance

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionproperty.setrawvaluewithoutlazyinitialization.php
