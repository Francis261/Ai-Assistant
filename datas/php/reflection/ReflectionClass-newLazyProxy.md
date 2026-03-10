# ReflectionClass::newLazyProxy

Source: https://devdocs.io/php/reflectionclass.newlazyproxy

(PHP 8 >= 8.4.0)

ReflectionClass::newLazyProxy — Creates a new lazy proxy instance

### Description

```
public ReflectionClass::newLazyProxy(callable $factory, int $options = 0): object
```

Creates a new lazy proxy instance of the class, attaching the factory function to it. The constructor is not called, and properties are not set to their default values. When an attempt is made to observe or modify the proxy's state for the first time, the factory function is called to provide a real instance, which is then attached to the proxy. After this, all subsequent interactions with the proxy are forwarded to the real instance. See Initialization Triggers and Initialization Sequence.

### Parameters

```
factory(object $object): object
```

options can be a combination of the following flags:

### Return Values

Returns a lazy proxy instance. If the object has no properties, or if all its properties are static or virtual, a normal (non-lazy) instance is returned. See also Lifecycle of Lazy Objects.

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
$object = $reflector->newLazyProxy(function (Example $object) {
     $realInstance = new Example(1);
     return $realInstance;
});

var_dump($object);
var_dump($object instanceof Example);

// Triggers initialization, and forwards the property fetch to the real instance
var_dump($object->prop);

var_dump($object);
?>
```

The above example will output:

```
lazy proxy object(Example)#3 (0) {
  ["prop"]=>
  uninitialized(int)
}
bool(true)
Example::__construct
int(1)
lazy proxy object(Example)#3 (1) {
  ["instance"]=>
  object(Example)#4 (1) {
    ["prop"]=>
    int(1)
  }
}
```

### See Also

- Lazy objects
- ReflectionClass::newLazyGhost() - Creates a new lazy ghost instance
- ReflectionClass::newInstanceWithoutConstructor() - Creates a new class instance without invoking the constructor
- ReflectionClass::resetAsLazyProxy() - Resets an object and marks it as lazy
- ReflectionClass::markLazyObjectAsInitialized() - Marks a lazy object as initialized without calling the initializer or factory
- ReflectionClass::initializeLazyObject() - Forces initialization of a lazy object
- ReflectionClass::isUninitializedLazyObject() - Checks if an object is lazy and uninitialized
- ReflectionProperty::setRawValueWithoutLazyInitialization() - Set raw property value without triggering lazy initialization
- ReflectionProperty::skipLazyInitialization() - Marks property as non-lazy
- ReflectionProperty::isLazy() - Checks whether a property is lazy

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionclass.newlazyproxy.php
