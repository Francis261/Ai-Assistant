# ReflectionProperty::getHooks

Source: https://devdocs.io/php/reflectionproperty.gethooks

(PHP 8 >= 8.4.0)

ReflectionProperty::getHooks — Returns an array of all hooks on this property

### Description

```
public ReflectionProperty::getHooks(): array
```

Returns a list of all hooks on this property.

### Parameters

This function has no parameters.

### Return Values

An array of ReflectionMethod objects keyed by the hook they are for. For example, a property with both get and set hooks will return a 2 element array with string keys get and set, each of which are a ReflectionMethod object. The order in which they are returned is explicitly undefined. If no hooks are defined, an empty array is returned.

### Examples

Example #1 ReflectionProperty::getHooks() example

```
<?php
class Example
{
    public string $name { get => "Name here"; }

    public int $count;
}

$rClass = new \ReflectionClass(Example::class);

$rProp = $rClass->getProperty('name');
var_dump($rProp->getHooks());

$rProp = $rClass->getProperty('count');
var_dump($rProp->getHooks());
?>
```

The above example will output:

```
array(1) {
  ["get"]=>
  object(ReflectionMethod)#3 (2) {
    ["name"]=>
    string(10) "$name::get"
    ["class"]=>
    string(7) "Example"
  }
}
array(0) {
}
```

### See Also

- ReflectionMethod
- ReflectionProperty::hasHooks() - Returns whether the property has any hooks defined

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionproperty.gethooks.php
