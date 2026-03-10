# ReflectionProperty::isDynamic

Source: https://devdocs.io/php/reflectionproperty.isdynamic

(PHP 8 >= 8.4.0)

ReflectionProperty::isDynamic — Checks if property is a dynamic property

### Description

```
public ReflectionProperty::isDynamic(): bool
```

Checks whether the property was declared at run-time, or whether the property was declared at compile-time.

### Parameters

This function has no parameters.

### Return Values

true if the property was declared at run-time, or false if it was created at compile-time.

### Examples

Example #1 ReflectionProperty::isDynamic() example

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
var_dump($ro->getProperty('bar')->isDynamic());
var_dump($ro->getProperty('baz')->isDynamic());
?>
```

The above example will output:

```
bool(false)
bool(true)
```

### See Also

- ReflectionProperty::getValue() - Gets value

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionproperty.isdynamic.php
