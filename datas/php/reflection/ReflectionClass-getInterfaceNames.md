# ReflectionClass::getInterfaceNames

Source: https://devdocs.io/php/reflectionclass.getinterfacenames

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

ReflectionClass::getInterfaceNames — Gets the interface names

### Description

```
public ReflectionClass::getInterfaceNames(): array
```

Get the interface names.

### Parameters

This function has no parameters.

### Return Values

A numerical array with interface names as the values.

### Examples

Example #1 ReflectionClass::getInterfaceNames() example

```
<?php
interface Foo { }

interface Bar { }

class Baz implements Foo, Bar { }

$rc1 = new ReflectionClass("Baz");

print_r($rc1->getInterfaceNames());
?>
```

The above example will output something similar to:

```
Array
(
    [0] => Foo
    [1] => Bar
)
```

### See Also

- ReflectionClass::getInterfaces() - Gets the interfaces

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionclass.getinterfacenames.php
