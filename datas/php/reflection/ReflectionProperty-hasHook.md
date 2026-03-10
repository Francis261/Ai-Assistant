# ReflectionProperty::hasHook

Source: https://devdocs.io/php/reflectionproperty.hashook

(PHP 8 >= 8.4.0)

ReflectionProperty::hasHook — Returns whether the property has a given hook defined

### Description

```
public ReflectionProperty::hasHook(PropertyHookType $type): bool
```

Returns whether the property has a given hook defined.

### Parameters

### Return Values

Returns true if the hook is defined on this property, false if not.

### Examples

Example #1 ReflectionProperty::hasHook() example

```
<?php
class Example
{
    public string $name { get => "Name here"; }
}

$rClass = new \ReflectionClass(Example::class);
$rProp = $rClass->getProperty('name');
var_dump($rProp->hasHook(PropertyHookType::Get));
var_dump($rProp->hasHook(PropertyHookType::Set));
?>
```

The above example will output:

```
bool(true)
bool(false)
```

### See Also

- ReflectionMethod
- PropertyHookType

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionproperty.hashook.php
