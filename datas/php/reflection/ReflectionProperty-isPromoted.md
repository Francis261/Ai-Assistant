# ReflectionProperty::isPromoted

Source: https://devdocs.io/php/reflectionproperty.ispromoted

(PHP 8)

ReflectionProperty::isPromoted — Checks if property is promoted

### Description

```
public ReflectionProperty::isPromoted(): bool
```

Checks whether the property is promoted

### Parameters

This function has no parameters.

### Return Values

true if the property is promoted, false otherwise.

### Examples

Example #1 ReflectionProperty::isPromoted() example

```
<?php
class Foo {
    public $baz;

    public function __construct(public $bar) {}
}

$o = new Foo(42);
$o->baz = 42;

$ro = new ReflectionObject($o);
var_dump($ro->getProperty('bar')->isPromoted());
var_dump($ro->getProperty('baz')->isPromoted());
?>
```

The above example will output:

```
bool(true)
bool(false)
```

### See Also

- ReflectionProperty::isDefault() - Checks if property is a default property
- ReflectionProperty::isInitialized() - Checks whether a property is initialized
- ReflectionProperty::getValue() - Gets value

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionproperty.ispromoted.php
