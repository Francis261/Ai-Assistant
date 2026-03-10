# ReflectionProperty::getType

Source: https://devdocs.io/php/reflectionproperty.gettype

(PHP 7 >= 7.4.0, PHP 8)

ReflectionProperty::getType — Gets a property's type

### Description

```
public ReflectionProperty::getType(): ?ReflectionType
```

Gets the associated type of a property.

### Parameters

This function has no parameters.

### Return Values

Returns a ReflectionType if the property has a type, and null otherwise.

### Examples

Example #1 ReflectionProperty::getType() example

```
<?php
class User
{
    public string $name;
}

$rp = new ReflectionProperty('User', 'name');
echo $rp->getType()->getName();
?>
```

The above example will output:

```
string
```

### See Also

- ReflectionProperty::hasType() - Checks if property has a type
- ReflectionProperty::isInitialized() - Checks whether a property is initialized

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionproperty.gettype.php
