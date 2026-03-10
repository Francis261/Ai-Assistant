# ReflectionClass::newLazyGhost

Source: https://devdocs.io/php/reflectionclass.newlazyghost

(PHP 8 >= 8.4.0)

ReflectionClass::newLazyGhost — Creates a new lazy ghost instance

### Description

```
public ReflectionClass::newLazyGhost(callable $initializer, int $options = 0): object
```

Creates a new lazy ghost instance of the class, attaching the initializer to it. The constructor is not called, and properties are not set to their default value. However, the object will be automatically initialized by invoking the initializer the first time its state is observed or modified. See Initialization Triggers and Initialization Sequence.

### Parameters

```
initializer(object $object): void
```

options can be a combination of the following flags:

### Return Values

Returns a lazy ghost instance. If the object has no properties, or if all its properties are static or virtual, a normal (non-lazy) instance is returned. See also Lifecycle of Lazy Objects.

### Errors/Exceptions

An Error if the class is internal or extends an internal class except stdClass.

### Examples

Example #1 Basic usage

```
<?php

class Example {
    public function __construct(public int $prop) {
        echo __METHOD__, "\n";
    }
}

$reflector = new ReflectionClass(Example::class);
$object = $reflector->newLazyGhost(function (Example $object) {
     $object->__construct(1);
});

var_dump($object);
var_dump($object instanceof Example);

// Triggers initialization, and fetches the property after that
var_dump($object->prop);

?>
```

The above example will output:

```
lazy ghost object(Example)#3 (0) {
  ["prop"]=>
  uninitialized(int)
}
bool(true)
Example::__construct
int(1)
```

### See Also

- Lazy objects
- ReflectionClass::newLazyProxy() - Creates a new lazy proxy instance
- ReflectionClass::newInstanceWithoutConstructor() - Creates a new class instance without invoking the constructor
- ReflectionClass::resetAsLazyGhost() - Resets an object and marks it as lazy
- ReflectionClass::markLazyObjectAsInitialized() - Marks a lazy object as initialized without calling the initializer or factory
- ReflectionClass::initializeLazyObject() - Forces initialization of a lazy object
- ReflectionClass::isUninitializedLazyObject() - Checks if an object is lazy and uninitialized
- ReflectionProperty::setRawValueWithoutLazyInitialization() - Set raw property value without triggering lazy initialization
- ReflectionProperty::skipLazyInitialization() - Marks property as non-lazy
- ReflectionProperty::isLazy() - Checks whether a property is lazy

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionclass.newlazyghost.php
