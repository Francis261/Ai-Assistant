# ReflectionClass::markLazyObjectAsInitialized

Source: https://devdocs.io/php/reflectionclass.marklazyobjectasinitialized

(PHP 8 >= 8.4.0)

ReflectionClass::markLazyObjectAsInitialized — Marks a lazy object as initialized without calling the initializer or factory

### Description

```
public ReflectionClass::markLazyObjectAsInitialized(object $object): object
```

Marks a lazy object as initialized without calling the initializer or factory. This has no effect if object is not lazy or is already initialized.

The effect of calling this method is the same as described for Ghost Objects (regardless of the laziness strategy of object) in initialization sequence, except that the initializer is not called. After that, the object is indistinguishable from an object that was never lazy and was created with ReflectionClass::newInstanceWithoutConstructor(), except for the value of properties that were already initialized with ReflectionProperty::setRawValueWithoutLazyInitialization() or ReflectionProperty::skipLazyInitialization().

### Parameters

### Return Values

Returns object.

### Examples

Example #1 Marking an uninitialized lazy object as initialized

```
<?php
class Example
{
    public string $prop1;
    public string $prop2;
    public string $prop3 = 'default value';
}

$reflector = new ReflectionClass(Example::class);

$object = $reflector->newLazyGhost(function ($object) {
    echo "Initializer called\n";
    $object->prop1 = 'initialized';
});

$reflector->getProperty('prop1')
          ->setRawValueWithoutLazyInitialization($object, 'prop1 value');

var_dump($object);

$reflector->markLazyObjectAsInitialized($object);

var_dump($object);
?>
```

The above example will output:

```
lazy ghost object(Example)#3 (1) {
  ["prop1"]=>
  string(11) "prop1 value"
  ["prop2"]=>
  uninitialized(string)
  ["prop3"]=>
  uninitialized(string)
}
object(Example)#3 (2) {
  ["prop1"]=>
  string(11) "prop1 value"
  ["prop2"]=>
  uninitialized(string)
  ["prop3"]=>
  string(13) "default value"
}
```

Example #2 Marking an initialized object as initialized

```
<?php
class Example
{
    public string $prop1;
    public string $prop2;
    public string $prop3 = 'default value';
}

$reflector = new ReflectionClass(Example::class);

$object = $reflector->newLazyGhost(function ($object) {
    echo "Initializer called\n";
    $object->prop1 = 'initialized';
});

$reflector->getProperty('prop1')
          ->setRawValueWithoutLazyInitialization($object, 'prop1 value');

var_dump($object->prop3);
var_dump($object);

$reflector->markLazyObjectAsInitialized($object);

var_dump($object);
?>
```

The above example will output:

```
Initializer called
string(13) "default value"
object(Example)#3 (2) {
  ["prop1"]=>
  string(11) "initialized"
  ["prop2"]=>
  uninitialized(string)
  ["prop3"]=>
  string(13) "default value"
}
object(Example)#3 (2) {
  ["prop1"]=>
  string(11) "initialized"
  ["prop2"]=>
  uninitialized(string)
  ["prop3"]=>
  string(13) "default value"
}
```

### See Also

- Lazy objects
- ReflectionClass::newLazyGhost() - Creates a new lazy ghost instance
- ReflectionClass::initializeLazyObject() - Forces initialization of a lazy object
- ReflectionClass::isUninitializedLazyObject() - Checks if an object is lazy and uninitialized

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionclass.marklazyobjectasinitialized.php
