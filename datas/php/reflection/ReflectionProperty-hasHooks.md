# ReflectionProperty::hasHooks

Source: https://devdocs.io/php/reflectionproperty.hashooks

(PHP 8 >= 8.4.0)

ReflectionProperty::hasHooks — Returns whether the property has any hooks defined

### Description

```
public ReflectionProperty::hasHooks(): bool
```

This function is currently not documented; only its argument list is available.

Returns whether the property has any hooks defined.

### Parameters

This function has no parameters.

### Return Values

Returns true if the property has at least one hook defined, false otherwise.

### Examples

Example #1 ReflectionProperty::hasHooks() example

```
<?php
class Example
{
    public string $name { get => "Name here"; }

    public string $none;
}

$rClass = new \ReflectionClass(Example::class);
var_dump($rClass->getProperty('name')->hasHooks());
var_dump($rClass->getProperty('none')->hasHooks());
?>
```

The above example will output:

```
bool(true)
bool(false)
```

### Notes

Note: This method is equivalent to checking ReflectionProperty::getHooks() against an empty array.

### See Also

- ReflectionProperty::getHooks() - Returns an array of all hooks on this property

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionproperty.hashooks.php
