# ReflectionProperty::isDefault

Source: https://devdocs.io/php/reflectionproperty.isdefault

(PHP 5, PHP 7, PHP 8)

ReflectionProperty::isDefault — Checks if property is a default property

### Description

```
public ReflectionProperty::isDefault(): bool
```

Checks whether the property was declared at compile-time, or whether the property was dynamically declared at run-time.

### Parameters

This function has no parameters.

### Return Values

true if the property was declared at compile-time, or false if it was created at run-time.

### Examples

Example #1 ReflectionProperty::isDefault() example

```
<?php

#[\AllowDynamicProperties]
class Foo {
    public $bar;
}

$o = new Foo();
$o->bar = 42;
$o->baz = 42;

$ro = new ReflectionObject($o);
var_dump($ro->getProperty('bar')->isDefault());
var_dump($ro->getProperty('baz')->isDefault());
?>
```

The above example will output:

```
bool(true)
bool(false)
```

### See Also

- ReflectionProperty::getValue() - Gets value

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionproperty.isdefault.php
