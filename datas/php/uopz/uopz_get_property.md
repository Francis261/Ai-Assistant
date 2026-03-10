# uopz_get_property

Source: https://devdocs.io/php/function.uopz-get-property

(PECL uopz 5, PECL uopz 6, PECL uopz 7)

uopz_get_property — Gets value of class or instance property

### Description

```
uopz_get_property(string $class, string $property): mixed
```

```
uopz_get_property(object $instance, string $property): mixed
```

Gets the value of a static class property, if class is given, or the value of an instance property, if instance is given.

### Parameters

The name of the class.

The object instance.

The name of the property.

### Return Values

Returns the value of the class or instance property, or null if the property is not defined.

### Examples

Example #1 Basic uopz_get_property() Usage

```
<?php
class Foo {
    private static $staticBar = 10;
    private $bar = 100;
}
$foo = new Foo;
var_dump(uopz_get_property('Foo', 'staticBar'));
var_dump(uopz_get_property($foo, 'bar'));
?>
```

The above example will output something similar to:

```
int(10)
int(100)
```

### See Also

- uopz_set_property() - Sets value of existing class or instance property

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.uopz-get-property.php
