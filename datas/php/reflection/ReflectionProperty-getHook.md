# ReflectionProperty::getHook

Source: https://devdocs.io/php/reflectionproperty.gethook

(PHP 8 >= 8.4.0)

ReflectionProperty::getHook — Returns a reflection object for a specified hook

### Description

```
public ReflectionProperty::getHook(PropertyHookType $type): ?ReflectionMethod
```

Gets the reflection of the property's hook, if any.

### Parameters

### Return Values

If the requested hook is defined, a ReflectionMethod instance will be returned. If not, the method will return null

### Examples

Example #1 ReflectionProperty::getHook() example

```
<?php
class Example
{
    public string $name { get => "Name here"; }
}

$rClass = new \ReflectionClass(Example::class);
$rProp = $rClass->getProperty('name');
var_dump($rProp->getHook(PropertyHookType::Get));
var_dump($rProp->getHook(PropertyHookType::Set));
?>
```

The above example will output:

```
object(ReflectionMethod)#4 (2) {
  ["name"]=>
  string(10) "$name::get"
  ["class"]=>
  string(7) "Example"
}
NULL
```

### See Also

- ReflectionMethod
- PropertyHookType

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionproperty.gethook.php
