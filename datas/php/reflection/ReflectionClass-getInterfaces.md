# ReflectionClass::getInterfaces

Source: https://devdocs.io/php/reflectionclass.getinterfaces

(PHP 5, PHP 7, PHP 8)

ReflectionClass::getInterfaces — Gets the interfaces

### Description

```
public ReflectionClass::getInterfaces(): array
```

Gets the interfaces.

### Parameters

This function has no parameters.

### Return Values

An associative array of interfaces, with keys as interface names and the array values as ReflectionClass objects.

### Examples

Example #1 ReflectionClass::getInterfaces() example

```
<?php
interface Foo { }

interface Bar { }

class Baz implements Foo, Bar { }

$rc1 = new ReflectionClass("Baz");

print_r($rc1->getInterfaces());
?>
```

The above example will output something similar to:

```
Array
(
    [Foo] => ReflectionClass Object
        (
            [name] => Foo
        )

    [Bar] => ReflectionClass Object
        (
            [name] => Bar
        )

)
```

### See Also

- ReflectionClass::getInterfaceNames() - Gets the interface names

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionclass.getinterfaces.php
