# ReflectionClass::initializeLazyObject

Source: https://devdocs.io/php/reflectionclass.initializelazyobject

(PHP 8 >= 8.4.0)

ReflectionClass::initializeLazyObject — Forces initialization of a lazy object

### Description

```
public ReflectionClass::initializeLazyObject(object $object): object
```

Forces initialization of the specified object. This method has no effect if the object is not lazy or has already been initialized. Otherwise, initialization proceeds as described in the Initialization Sequence.

Note: In most cases, calling this method is unnecessary, as lazy objects initialize themselves automatically when their state is observed or modified.

### Parameters

### Return Values

If object is a lazy proxy, returns its real instance. Otherwise, returns object itself.

### Examples

Example #1 Basic usage

```
<?php
class Example
{
    public function __construct(public int $prop) {
    }
}

$reflector = new ReflectionClass(Example::class);

$object = $reflector->newLazyGhost(function ($object) {
    echo "Initializer called\n";
    $object->__construct(1);
});

var_dump($object);

$reflector->initializeLazyObject($object);

var_dump($object);
?>
```

The above example will output:

```
lazy ghost object(Example)#3 (0) {
  ["prop"]=>
  uninitialized(int)
}
Initializer called
object(Example)#3 (1) {
  ["prop"]=>
  int(1)
}
```

### See Also

- Lazy objects
- ReflectionClass::newLazyGhost() - Creates a new lazy ghost instance
- ReflectionClass::markLazyObjectAsInitialized() - Marks a lazy object as initialized without calling the initializer or factory
- ReflectionClass::isUninitializedLazyObject() - Checks if an object is lazy and uninitialized

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionclass.initializelazyobject.php
