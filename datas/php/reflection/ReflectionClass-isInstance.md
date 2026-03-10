# ReflectionClass::isInstance

Source: https://devdocs.io/php/reflectionclass.isinstance

(PHP 5, PHP 7, PHP 8)

ReflectionClass::isInstance — Checks class for instance

### Description

```
public ReflectionClass::isInstance(object $object): bool
```

Checks if an object is an instance of a class.

### Parameters

The object being compared to.

### Return Values

Returns true if the object is an instance of the class, or false otherwise.

### Examples

Example #1 ReflectionClass::isInstance() related examples

```
<?php

class Foo {}

$object = new Foo();

$reflection = new ReflectionClass('Foo');

if ($reflection->isInstance($object)) {
    echo "Yes\n";
}

// Equivalent to
if ($object instanceof Foo) {
    echo "Yes\n";
}

// Equivalent to
if (is_a($object, 'Foo')) {
    echo "Yes";
}
?>
```

The above example will output something similar to:

```
Yes
Yes
Yes
```

### See Also

- ReflectionClass::isInterface() - Checks if the class is an interface
- Type operators (instanceof)
- Object Interfaces
- is_a() - Checks whether the object is of a given type or subtype

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionclass.isinstance.php
