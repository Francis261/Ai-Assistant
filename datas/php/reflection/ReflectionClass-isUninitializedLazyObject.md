# ReflectionClass::isUninitializedLazyObject

Source: https://devdocs.io/php/reflectionclass.isuninitializedlazyobject

(PHP 8 >= 8.4.0)

ReflectionClass::isUninitializedLazyObject — Checks if an object is lazy and uninitialized

### Description

```
public ReflectionClass::isUninitializedLazyObject(object $object): bool
```

Checks if an object is lazy and uninitialized.

### Parameters

### Return Values

Returns true if object is an uninitialized lazy object, false otherwise.

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

var_dump($reflector->isUninitializedLazyObject($object));

var_dump($object->prop);

var_dump($reflector->isUninitializedLazyObject($object));
?>
```

The above example will output:

```
bool(true)
Initializer called
int(1)
bool(false)
```

### See Also

- Lazy objects
- ReflectionClass::newLazyGhost() - Creates a new lazy ghost instance
- ReflectionClass::markLazyObjectAsInitialized() - Marks a lazy object as initialized without calling the initializer or factory
- ReflectionClass::initializeLazyObject() - Forces initialization of a lazy object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionclass.isuninitializedlazyobject.php
