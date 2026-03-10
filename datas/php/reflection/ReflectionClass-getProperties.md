# ReflectionClass::getProperties

Source: https://devdocs.io/php/reflectionclass.getproperties

(PHP 5, PHP 7, PHP 8)

ReflectionClass::getProperties — Gets properties

### Description

```
public ReflectionClass::getProperties(?int $filter = null): array
```

Retrieves reflected properties.

### Parameters

The optional filter, for filtering desired property types. It's configured using the ReflectionProperty constants, and defaults to all property types.

### Return Values

An array of ReflectionProperty objects.

### Changelog

### Examples

Example #1 ReflectionClass::getProperties() filtering example

This example demonstrates usage of the optional filter parameter, where it essentially skips private properties.

```
<?php
class Foo {
    public    $foo  = 1;
    protected $bar  = 2;
    private   $baz  = 3;
}

$foo = new Foo();

$reflect = new ReflectionClass($foo);
$props   = $reflect->getProperties(ReflectionProperty::IS_PUBLIC | ReflectionProperty::IS_PROTECTED);

foreach ($props as $prop) {
    print $prop->getName() . "\n";
}

var_dump($props);

?>
```

The above example will output something similar to:

```
foo
bar
array(2) {
  [0]=>
  object(ReflectionProperty)#3 (2) {
    ["name"]=>
    string(3) "foo"
    ["class"]=>
    string(3) "Foo"
  }
  [1]=>
  object(ReflectionProperty)#4 (2) {
    ["name"]=>
    string(3) "bar"
    ["class"]=>
    string(3) "Foo"
  }
}
```

### See Also

- ReflectionClass::getProperty() - Gets a ReflectionProperty for a class's property
- ReflectionProperty
- ReflectionProperty modifier constants

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionclass.getproperties.php
