# ReflectionProperty::hasType

Source: https://devdocs.io/php/reflectionproperty.hastype

(PHP 7 >= 7.4.0, PHP 8)

ReflectionProperty::hasType — Checks if property has a type

### Description

```
public ReflectionProperty::hasType(): bool
```

Checks if the property has a type associated with it.

### Parameters

This function has no parameters.

### Return Values

true if a type is specified, false otherwise.

### Examples

Example #1 ReflectionProperty::hasType() example

```
<?php
class User
{
    public string $name;
}

$rp = new ReflectionProperty('User', 'name');
var_dump($rp->hasType());
?>
```

The above example will output:

```
bool(true)
```

### See Also

- ReflectionProperty::getType() - Gets a property's type
- ReflectionProperty::isInitialized() - Checks whether a property is initialized

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionproperty.hastype.php
